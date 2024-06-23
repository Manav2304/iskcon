import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import axios from "axios";
import { CloseButton, FormLabel } from "react-bootstrap";
import {
  Popup,
  PopupContent,
  FormInput,
  SubmitButton,
  DonationformTitle,
  FormRow,
  FormGroup,
  FormHeading,
} from "./DonationFormStyle";
import { Donation } from "./constant";
import Logo from "../../../assets/images/iskcon-logo.png";

type DonationFormProps = {
  onClose: () => void;
  onSubmit: (formData: any, title: string) => void;
  donationPageName: string;
};

function loadScript(src: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const DonationForm: React.FC<
  DonationFormProps & {
    totalDonationAmount: number;
    selectedDonations: Donation[];
  }
> = ({
  onClose,
  onSubmit,
  totalDonationAmount,
  selectedDonations,
  donationPageName, // Receive the prop
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [panCard, setPanCard] = useState<string>("");
  const [panCardError, setPanCardError] = useState<string>("");
  const [pincodeError, setPincodeError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [cityError, setCityError] = useState<string>("");
  const [stateError, setStateError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [contactNumberError, setContactNumberError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadRazorpayScript();
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const loadRazorpayScript = async () => {
    const existingScript = document.getElementById("razorpay-script");

    if (!existingScript) {
      const res = await loadScript(process.env.RAZORPAY_LOAD_SCRIPT as string);

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
      }
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const nameRegex = /^[A-Za-z\s]+$/;
    setName(value);

    if (!value.trim()) {
      setNameError("Name is required.");
    } else if (!nameRegex.test(value)) {
      setNameError("Enter Correct Name.");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(value);

    if (!value.trim()) {
      setEmailError("Email is required.");
    } else if (!emailRegex.test(value)) {
    } else {
      setEmailError("");
    }
  };

  const handleContactNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const contactNumberRegex = /^[0-9]{10}$/;
    setContactNumber(value);

    if (!value.trim()) {
      setContactNumberError("Contact number is required.");
    } else if (!contactNumberRegex.test(value)) {
      setContactNumberError("Enter valid Contact Number.");
    } else {
      setContactNumberError("");
    }
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);

    if (!value.trim()) {
      setAddressError("Address is required.");
    }
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const cityRegex = /^[A-Za-z\s]+$/;
    setCity(value);

    if (!value.trim()) {
      setCityError("City is required.");
    } else if (!cityRegex.test(value)) {
      setCityError("Enter valid City Name.");
    } else {
      setCityError("");
    }
  };

  const handlePincodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const pincodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    setPincode(value);

    if (!pincodeRegex.test(value)) {
      setPincodeError("Invalid pincode.");
    } else {
      setPincodeError("");
    }
  };

  const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const stateRegex = /^[A-Za-z\s]+$/;
    setState(value);

    if (!value.trim()) {
      setStateError("State is required.");
    } else if (!stateRegex.test(value)) {
      setStateError("Enter valid State Name.");
    } else {
      setStateError("");
    }
  };

  const handlePanCardChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    setPanCard(value);

    if (!panCardRegex.test(value)) {
      setPanCardError("Invalid PAN card.");
    } else {
      setPanCardError("");
    }
  };

  const handleRazorpayAndSubmit = async () => {
    try {
      const responseRazorpay = await axios.post(
        process.env.RAZORPAY_RESPONSE as string,
        {
          name,
          email,
          selectedDonations,
          amount: totalDonationAmount,
          panCard: totalDonationAmount > 50000 ? panCard : "NA",
          address,
          city,
          pincode,
          state,
          donationPageName,
          contactNumber,
        },
      );

      const dataRazorpay = responseRazorpay.data;

      const options = {
        key: process.env.RAZORPAY_PUBIC_KEY,
        currency: dataRazorpay.payment.currency,
        amount: (totalDonationAmount * 100).toString(),
        order_id: dataRazorpay.order.order_payment_id,
        name: "Donation",
        description: "Thank you for your donation",
        image: Logo,
        handler: async (response: any) => {
          const paymentReferenceId = response.razorpay_payment_id;
          const signatureId = response.razorpay_signature;
          const orderId = response.razorpay_order_id;
          await validation(paymentReferenceId, signatureId, orderId);

          setSubmitted(true);
          onClose();
        },
        prefill: {
          name,
          email,
          phone_number: contactNumber,
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error sending payment reference ID:", error);
    }
  };

  const validation = async (
    paymentReferenceId: string,
    signatureId: string,
    orderId: string,
  ) => {
    try {
      await axios.post(process.env.RAZORPAY_VALIDATION as string, {
        orderId,
        paymentReferenceId,
        signatureId,
      });
    } catch (error) {
      console.error("Error sending payment reference ID:", error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitted) {
      return;
    }

    if (totalDonationAmount > 50000) {
      const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!panCard) {
        setPanCardError("PAN card is required for donations over 50000.");
        return;
      }
      if (!panCardRegex.test(panCard)) {
        setPanCardError(
          "Invalid PAN card format. It should be 5 letters, 4 numbers, and 1 letter.",
        );
        return;
      }
    }

    const pincodeRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if (!pincodeRegex.test(pincode)) {
      setPincodeError("Invalid pincode format.");
      return;
    }

    if (!name.trim()) {
      setNameError("Name is required.");
      return;
    }

    if (!address.trim()) {
      setAddressError("Address is required.");
      return;
    }

    if (address.length < 10) {
      setAddressError("Address must be at least 10 characters long.");
      return;
    }

    if (!city.trim()) {
      setCityError("City is required.");
      return;
    }

    if (!state.trim()) {
      setStateError("State is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required.");
      return;
    } else if (!emailRegex.test(email)) {
      return;
    }

    const contactNumberRegex = /^[0-9]{10}$/;
    if (!contactNumber.trim()) {
      setContactNumberError("Contact number is required.");
      return;
    } else if (!contactNumberRegex.test(contactNumber)) {
      setContactNumberError("Contact number must be exactly 10 digits.");
      return;
    }
    setIsButtonClicked(true);
    handleRazorpayAndSubmit();
  };

  return (
    <Popup>
      <PopupContent
        ref={formRef}
        style={{ maxHeight: "70vh", overflowY: "auto" }}
      >
        <hr />
        <FormHeading>
          <CloseButton onClick={onClose}></CloseButton>
          <DonationformTitle>
            <span>Donation Information</span>
          </DonationformTitle>
        </FormHeading>
        <hr />
        <form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
              {nameError && <div style={{ color: "red" }}>{nameError}</div>}
            </FormGroup>
            <FormGroup>
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>Contact Number:</FormLabel>
              <FormInput
                type="tel"
                value={contactNumber}
                onChange={handleContactNumberChange}
                required
              />
              {contactNumberError && (
                <div style={{ color: "red" }}>{contactNumberError}</div>
              )}
            </FormGroup>
            <FormGroup>
              <FormLabel>Address:</FormLabel>
              <FormInput
                type="text"
                value={address}
                onChange={handleAddressChange}
                required
              />
              {addressError && (
                <div style={{ color: "red" }}>{addressError}</div>
              )}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>City:</FormLabel>
              <FormInput
                type="text"
                value={city}
                onChange={handleCityChange}
                required
              />
              {cityError && <div style={{ color: "red" }}>{cityError}</div>}
            </FormGroup>
            <FormGroup>
              <FormLabel>State:</FormLabel>
              <FormInput
                type="text"
                value={state}
                onChange={handleStateChange}
                required
              />
              {stateError && <div style={{ color: "red" }}>{stateError}</div>}
            </FormGroup>
          </FormRow>

          <FormRow>
            <FormGroup>
              <FormLabel>Pincode:</FormLabel>
              <FormInput
                type="text"
                value={pincode}
                onChange={handlePincodeChange}
                required
              />
              {pincodeError && (
                <div style={{ color: "red" }}>{pincodeError}</div>
              )}
            </FormGroup>

            {totalDonationAmount > 50000 && (
              <FormGroup>
                <FormLabel>PAN Card:</FormLabel>
                <FormInput
                  type="text"
                  value={panCard}
                  onChange={handlePanCardChange}
                  required
                />
                {panCardError && (
                  <div style={{ color: "red" }}>{panCardError}</div>
                )}
              </FormGroup>
            )}
          </FormRow>

          <SubmitButton
            type="submit"
            className={isButtonClicked ? "clicked" : ""}
          >
            Submit
          </SubmitButton>
        </form>
      </PopupContent>
    </Popup>
  );
};
