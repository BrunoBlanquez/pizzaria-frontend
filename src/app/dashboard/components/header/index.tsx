import Link from "next/link"
import Image from "next/image"
import styles from "./styles.module.scss"
import logo from "/public/logo.svg"
import { LogOutIcon } from "lucide-react"

export function Header() {
    return (
        <header className={styles.headerCointainer}>
            <div className={styles.headerContent}>
                <Link href='/dashboard'>
                    <Image 
                        alt="Logo sujeito pizza"
                        src={logo}
                        width={190}
                        height={60}
                        priority={true}
                        quality={100}
                    ></Image>
                </Link>
                <nav>
                    <Link href="/dashboard/category">
                        Categoria                   
                    </Link>
                    <Link href="/dashboard/product">
                        Produto                   
                    </Link>

                    <form>
                        <button type="submit">
                            <LogOutIcon size={24} color="#FFF"/>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}