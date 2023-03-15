
import Head from 'next/head'

type user = {
    id: number
    name: string
    email: string
}

type Props = {
    user: user | null
}

function User({ user }: Props) {
    return (
        <>
            <Head>
                <title>User</title>
            </Head>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold">User</h1>
            </div>
            {
                user ? (
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-xl">{user.email}</p>
                    </div>
                ) : (
                    <div className="container mx-auto">
                        <h2 className="text-2xl font-bold">User not found</h2>
                    </div>
                )
            }
        </>
    )
}

export default User