import { Button } from "@mantine/core";
import { useState } from "react";
import { Title } from "src/components/title";

export const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSend = async () => {
    const data = {
      name,
      email,
      message,
    };

    const response = await fetch("/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status != 200) {
      alert("error");
    } else {
      resetValue();
    }
    setDisabled(false);
  };

  const resetValue = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto w-screen py-20 px-3 md:max-w-5xl">
      <Title>Contact</Title>
      <form onSubmit={handleSend}>
        <dl>
          <dd className="mt-2">
            <label htmlFor="email">Email</label>
          </dd>
          <dt>
            <input
              className="w-full rounded border-2 border-gray-200 py-1 px-2 leading-[155%]"
              id="email"
              v-model="postData.email"
              name="email"
              type="text"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </dt>
        </dl>
        <dl>
          <dd className="mt-2">
            <label htmlFor="name">Name</label>
          </dd>
          <dt>
            <input
              id="name"
              className="w-full rounded border-2 border-gray-200 py-1 px-2 leading-[155%]"
              v-model="postData.name"
              name="name"
              type="text"
              placeholder="Taro Yamada"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </dt>
        </dl>
        <dl>
          <dd className="mt-2">
            <label htmlFor="message">Your message</label>
          </dd>
          <dt>
            <textarea
              id="message"
              className="w-full rounded border-2 border-gray-200 py-1 px-2 leading-[155%]"
              v-model="postData.message"
              name="message"
              placeholder="I want to order your goods "
              rows={3}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </dt>
        </dl>
        <div className="mt-10 flex justify-center">
          <Button color="dark" type="submit" radius="xl">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};
