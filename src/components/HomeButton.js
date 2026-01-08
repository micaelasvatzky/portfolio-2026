import Image from "next/image"

const HomeButton = ({ title, image }) => {
  return (
    <div style={{ position: "relative", width: 200, height: 300 }}>
      <Image
        src="/b99.jpg"
        alt={title}
        width={200}
        height={300}
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
  )
}

export default HomeButton



