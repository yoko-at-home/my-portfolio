import { Button } from "@mantine/core";

export const ContactForm = () => {
  return (
    <div className="container mx-auto py-20 px-3 md:px-20">
    <form>
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
