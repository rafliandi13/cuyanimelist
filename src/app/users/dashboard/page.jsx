import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()
    console.log(user)

    return(
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcolme, {user?.name}</h5>
            <Image src={user?.image} width={250} height={250}/>
            <div className="flex flext-wrap gap-4 py-9">
                <Link href="/users/dashboard/collection"
                className="bg-color-accent text-color-dark font-bold px-3 py-3 text-xl">My Collection</Link>
                <Link href="/users/dashboard/comment"
                className="bg-color-accent text-color-dark font-bold px-3 py-3 text-xl">My Comment</Link>
            </div>
        </div>
    )
}

export default Page