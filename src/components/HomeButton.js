import Image from "next/image"
import Link from "next/link"

const HomeButton = ({ title, image, href }) => {
  return (
    <Link href={href}>
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <Image
          src="/b99.jpg"
          alt={title}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
        />

        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#B9471C",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {title}
        </span>
      </div>
    </Link>
  )
}

export default HomeButton




