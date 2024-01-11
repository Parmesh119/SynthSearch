export default function Footer() {
    return (
        <footer style={{
            bottom: "0",
            marginTop: "18rem",
        }}>
            <p className="text-sky-900">@SynthSearch; All rights reserved &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}
