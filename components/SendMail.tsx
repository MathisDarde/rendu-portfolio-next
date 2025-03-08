"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "./Button";

// Import dynamique pour éviter les erreurs SSR
const Select = dynamic(() => import("react-select"), { ssr: false });
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

type CountryOption = {
  value: string;
  label: React.ReactNode;
  name: string;
};

const fetchCountries = async (): Promise<CountryOption[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return data
    .map((country: any) => ({
      value: country.cca2,
      label: (
        <div className="flex items-center">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-6 h-4 mr-2"
          />
          {country.name.common}
        </div>
      ),
      name: country.name.common,
    }))
    .sort((a: CountryOption, b: CountryOption) => a.name.localeCompare(b.name));
};

function SendMail() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );

  const [formData, setFormData] = useState({
    email: "",
    title: "",
    content: "",
    name: "",
    country: "",
  });
  const [status, setStatus] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getCountries = async () => {
        const countryData = await fetchCountries();
        setCountries(countryData);
      };
      getCountries();
    }
  }, []);

  const handleCountryChange = (selectedOption: CountryOption | any) => {
    setSelectedCountry(selectedOption);
    setFormData({
      ...formData,
      country: selectedOption ? selectedOption.name : "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      recaptchaValue,
    };

    if (!recaptchaValue) {
      setStatus("Veuillez valider le CAPTCHA.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Votre message a été envoyé !");
        setTimeout(() => setStatus(""), 3000);
        setFormData({
          email: "",
          title: "",
          content: "",
          name: "",
          country: "",
        });
        setSelectedCountry(null);
      } else {
        setStatus("Une erreur s'est produite. Veuillez réessayer...");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatus("Une erreur s'est produite. Veuillez réessayer.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white w-[300px] sm:w-[575px] mx-auto my-8 p-4 rounded-2xl">
      <p className="my-4 text-sm lg:text-xl font-tt_travels text-left">
        To: dardemathis@gmail.com
      </p>
      <form className="w-full px-1 lg:px-4" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border-b-gray-600 border-b py-2 xl:py-4 px-4 w-full my-2 text-xs lg:text-base font-montserrat"
          required
        />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border-b-gray-600 border-b py-2 xl:py-4 px-4 w-full my-2 text-xs lg:text-base font-montserrat"
          required
        />
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          className="border-b-gray-600 border-b py-2 xl:py-4 px-4 w-full my-2 text-xs lg:text-base font-montserrat"
          required
        />

        <div className="block lg:flex my-2 xl:my-4">
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border-b-gray-600 border-b py-2 xl:py-4 px-4 w-full my-2 text-xs lg:text-base font-montserrat"
              required
            />

            <div className="my-4">
              <Select
                options={countries}
                onChange={handleCountryChange} // OnChange fonctionne sans typage générique
                value={selectedCountry}
                placeholder="Select a country"
                isClearable
                className="font-montserrat"
              />
            </div>

            <Button
              text="Submit my message"
              type="submit"
              className="mx-auto font-montserrat text-xs bg-black text-white rounded-full p-4"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <span className="font-tt_travels">Captcha</span>
              <div className="border-2 border-gray-600 w-28 h-36 p-4 my-2">
                <img
                  src="/images/fingerprint.png"
                  alt="Fingerprint"
                  className="h-full m-auto -rotate-12"
                />
                <ReCAPTCHA
                  sitekey="6LeZ5cMqAAAAAGv3hfdupFViySPmDsnegYlp0W-7"
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {status && (
        <p className="mt-4 text-center bg-green-500 text-white text-base px-6 py-3 rounded-xl font-montserrat">
          {status}
        </p>
      )}
    </div>
  );
}

export default SendMail;
