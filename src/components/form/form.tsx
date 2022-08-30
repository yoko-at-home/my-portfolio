import { FC, FormEvent, useState } from "react";
import { useForm } from "@mantine/form";
import { Button, Group, Textarea, TextInput } from "@mantine/core";
import { Title } from "src/components/atom/title";

export const ContactForm: FC = () => {
  const [sendMessage, setSendMessage] = useState<string>("Need help?");
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const onSubmit = async (values: typeof form.values) => {
    try {
      // microCMSに送信
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      form.reset();
      setSendMessage("Thank you! We'll be in touch.");
    } catch (error) {
      console.error("Fetch error: ", error);
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="container mx-auto w-screen py-20 px-3 md:max-w-5xl">
      <Title>Contact</Title>
      <div className="mx-auto max-w-2xl">
        <div className="mb-3 font-bold">{sendMessage}</div>
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
            className="mb-3"
          />

          <TextInput
            required
            label="Name"
            placeholder="Taro Yamada"
            {...form.getInputProps("name")}
            className="mb-3"
          />

          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            {...form.getInputProps("message")}
            className="mb-3"
          />

          <Group position="center" mt="md">
            <Button
              type="submit"
              radius="xl"
              color={"dark"}
              sx={(theme) => ({
                color: theme.colorScheme === "dark" ? "black" : "white",
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[2]
                    : theme.colors.gray[7],
              })}
            >
              Send message
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
};
