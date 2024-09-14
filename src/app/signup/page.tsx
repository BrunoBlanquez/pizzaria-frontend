import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss"
import logo from "/public/logo.svg"
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Signup() {
    async function handleRegister(formData: FormData) {
        "use server"

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (name == "" || email == "" || password == "" || confirmPassword == "") {
            console.log("Dados inválidos")
            return;
        }

        if (password == confirmPassword) {
            try {
                await api.post("/users", {name, email, password})
            } catch (error) {
                console.log(error)
            }
            
            redirect("/")
        } else {
            console.log("Senhas não conferem")
        }
        
    }

    return (
        <>
            <div className={styles.containerCenter}>
                <Image src={logo} alt="Logo escrito Pizza em cor vermelha" />

                <section className={styles.login}>
                    <h1>Realize seu cadastro</h1>
                    <form action={handleRegister}>
                        <input type="text" required name="name" placeholder="Digite seu nome" className={styles.input}></input>
                        <input type="email" required name="email" placeholder="Digite seu email" className={styles.input}></input>
                        <input type="password" required name="password" placeholder="Senha" className={styles.input}></input>
                        <input type="password" required name="confirmPassword" placeholder="Confirme sua senha" className={styles.input}></input>
                        <button type="submit">Cadastrar</button>
                    </form>

                    <Link href="/" className={styles.text}>
                        Já possui uma conta? Faça seu login
                    </Link>
                </section>
            </div>
        </>
    )
}