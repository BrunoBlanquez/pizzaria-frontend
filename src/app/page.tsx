import styles from "./page.module.scss";
import Image from "next/image";
import logo from '/public/logo.svg';
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Home() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password ==="") {
      return;
    }

    try {
      const response = await api.post("/login", {
        email,
        password
      })

      console.log("Data:", response.data);

      if (!response.data.token) {
        return;
      }
      
    } catch (error) {
      console.log(error)
      return;
    }

    redirect("/dashboard")
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logo} alt="Logo escrito Pizza em cor vermelha" />

        <section className={styles.login}>
          <form action={handleLogin}>
            <input type="email" required name="email" placeholder="Digite seu email" className={styles.input}></input>
            <input type="password" required name="password" placeholder="***********" className={styles.input}></input>
            <button type="submit">Acessar</button>
          </form>

          <Link href="/signup" className={styles.text}>
          Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
