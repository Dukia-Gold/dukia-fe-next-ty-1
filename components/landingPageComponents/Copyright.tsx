import { Linkedin } from "lucide-react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Copyright = () => {
  return (
    <section className="bg-dukiaBlue py-10">
      {/* Copyright and Social Media Icons */}
      <div className="flex items-center justify-between container">
        {/* Copyright */}
        <p className="text-white text-sm font-semibold">
          © 2024, Dukia Gold - Precious Metals Refining Co. Ltd.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/company/dukiagoldapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 border border-white rounded-full text-white">
              <Linkedin width={15} height={15} />
            </div>
          </Link>

          {/* Twitter */}
          <Link
            href="https://x.com/DukiaGoldApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 border border-white rounded-full text-white">
              <RiTwitterXFill width={15} height={15} />
            </div>
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/dukiagoldapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 border border-white rounded-full text-white">
              <RiInstagramFill width={15} height={15} />
            </div>
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/dukiagoldapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 border border-white rounded-full text-white">
              <RiFacebookFill width={15} height={15} />
            </div>
          </Link>

          {/* Youtube */}
          <Link
            href="https://www.youtube.com/@DukiaGoldApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-2 border border-white rounded-full text-white">
              <RiYoutubeFill width={15} height={15} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
