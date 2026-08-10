// "use client";

// import { Button } from "./ui/button";

// interface DownloadResumeButtonProps {
//   pdfUrl: string;
//   fileName?: string;
//   buttonText?: string;
// }

// export default function DownloadResumeButton({
//   pdfUrl,
//   fileName = "Resume.pdf",
//   buttonText = "Download Resume",
// }: DownloadResumeButtonProps) {
//   const handleDownload = async () => {
//     const res = await fetch(pdfUrl);
//     const blob = await res.blob();
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     URL.revokeObjectURL(url);
//   };

//   return (
//     <Button
//       variant={"outline"}
//       size={"lg"}
//       onClick={handleDownload}
//       className="cursor-pointer px-8 py-5 w-fit border-[#c778df] hover:bg-[#c778df]"
//     >
//       {buttonText}
//     </Button>
//   );
// }

"use client";

import { Button } from "./ui/button";

interface DownloadResumeButtonProps {
  pdfUrl: string;
  fileName?: string;
  buttonText?: string;
}

export default function DownloadResumeButton({
  pdfUrl,
  fileName = "Resume.pdf",
  buttonText = "Download Resume",
}: DownloadResumeButtonProps) {
  return (
    <Button
      asChild
      variant={"outline"}
      size={"lg"}
      className="cursor-pointer px-8 py-5 w-fit border-[#c778df] hover:bg-[#c778df]"
    >
      <a href={pdfUrl} download={fileName}>
        {buttonText}
      </a>
    </Button>
  );
}