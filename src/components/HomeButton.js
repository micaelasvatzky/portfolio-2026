import Image from "next/image"
import Link from "next/link"

const HomeButton = ({ title, image, href }) => {
  return (
    <Link href={href} className="hover:scale-105">
      <div style={{ position: "relative"}}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />

        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#EFE6DA",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
          }}
          className="w-50
          bg-[#b9471c]"
        >
          {title}
        </span>
      </div>
    </Link>
  )
}

export default HomeButton




