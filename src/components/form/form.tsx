import { Button } from "@mantine/core";
import { useRouter } from "next/router";

export const ContactForm = () => {
  const router = useRouter();
  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "Thank you for contacting!",
        to: "yoko_iwasakijp@yahoo.co.jp",
        text:
          "以下の内容でお問い合わせを受け付けました。\n\n" +
          "お名前: " +
          event.target.name.value +
          " 様\n" +
          "メールアドレス: " +
          event.target.email.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };
  return (
    <div className="container mx-auto py-20 px-3 md:px-20">
    <form onSubmit={handleRegisterUser}>
      <dl>
        <dd className="mt-2"><label htmlFor="email">Email</label></dd>
        <dt>
            <input
              className="w-full border-2 border-gray-200 py-1 px-2 rounded leading-[155%]"
            id="email"
            v-model="postData.email"
            name="email"
              type="text"
              placeholder="your@email.com"
              required
          />
        </dt>
      </dl>
      <dl>
        <dd className="mt-2"><label htmlFor="name">Name</label></dd>
        <dt>
          <input
            id="name"
            className="w-full border-2 border-gray-200 py-1 px-2 rounded leading-[155%]"
            v-model="postData.name"
            name="name"
              type="text"
              placeholder="Taro Yamada"
              required
          />
        </dt>
      </dl>
      <dl>
        <dd  className="mt-2"><label htmlFor="message">Your message</label></dd>
        <dt>
          <textarea id="message" className="w-full border-2 border-gray-200 py-1 px-2 rounded leading-[155%]" v-model="postData.message" name="message" placeholder="I want to order your goods "rows={3} required/>
        </dt>
        </dl>
        <div className="flex justify-center mt-10">
      <Button color="dark" type="submit" radius="xl">Send message</Button>
        </div>
    </form>
  </div>
  )
}
