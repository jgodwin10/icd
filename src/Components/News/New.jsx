import React from "react";
import Img from "../../Images/news.jpg";
import Img1 from "../../Images/news1.jpg";

const New = () => {
  const items = [
    {
      img: Img,
      title: "Sultan condemns hate speech, urges Nigerians to unite",
      text: "Sokoto, Nigeria - The Sultan of Sokoto, Alhaji Sa’ad Abubakar III, has urged Nigerians to resist attempts by politicians to divide the country through hate speech and bigotry. The revered Islamic leader emphasised the importance of unity and tolerance in a statement released by the Institute for Cultural Diplomacy (ICD). The ICD, a global organisation dedicated to fostering intercultural understanding, is committed to promoting peace and stability in Nigeria.",
      date: "June 12, 2023",
      link: "https://www.icdreviews.org/index.php?leadership.ng-the-symposium-on-cultural-diplomacy-religion-held-by-the-icd-gives-a-platform-for-the-country-representative-of-nigeria-to-express-his-stance-on-inter-faith-discourse",
    },
    {
      img: Img1,
      title: "Sultan slams politicians, calls for interfaith unity",
      text: "Rome, Italy – A powerful message of unity and peace was delivered at the ICD's international symposium in Rome. Representing the Sultan of Sokoto, Mr. Dickson Omoregie condemned the divisive tactics employed by Nigerian politicians. The Sultan urged Nigerians to reject hate speech and bigotry, calling for a stronger emphasis on interfaith dialogue. The ICD remains committed to fostering peace and understanding in Nigeria and worldwide.",
      date: "June 20, 2023",
      link: "https://www.icdreviews.org/index.php?leadership.ng-the-symposium-on-cultural-diplomacy-religion-held-by-the-icd-gives-a-platform-for-the-country-representative-of-nigeria-to-express-his-stance-on-inter-faith-discourse",
    },
  ];

  const items1 = [
    {
      img: Img1,
      title: "ICD to award scholarships to Nigerian students",
      text: "Lagos, Nigeria – The Institute for Cultural Diplomacy (ICD) is excited to announce a new scholarship program designed to empower Nigerian youth. This groundbreaking initiative will provide opportunities for young Nigerians to pursue higher education and professional development in Europe. The ICD is committed to investing in the next generation of Nigerian leaders. Through this scholarship program, we aim to create a brighter future for Nigeria.",
      date: "June 12, 2023",
      link: "https://www.pulse.ng/communities/student/institute-for-cultural-diplomacy-germanys-icd-to-support-nigerian-youth-with/jgxgvzt",
    },
    {
      img: Img1,
      title: "ICD hails June 12 as catalyst for Nigeria's unity",
      text: "Lagos, Nigeria – The Institute for Cultural Diplomacy (ICD) has praised the declaration of June 12 as Democracy Day in Nigeria. ICD Country Representative, Dickson Omoregie, believes this move is a powerful symbol of unity and a testament to the nation’s resilience. Omoregie emphasised that honouring the legacy of MKO Abiola will inspire young Nigerians to contribute to the country’s development. He called on other African leaders to follow President Buhari’s example in recognizing deserving citizens.",
      date: "June 20, 2023",
      link: "https://dailypost.ng/2018/06/07/mko-abiola-june-12-declaration-honour-will-nigeria-icd/",
    },
    {
      img: Img1,
      title:
        "ICD Nigeria promotes peace in Edo elections and offers scholarships for youth",
      text: "The Institute for Cultural Diplomacy (ICD) urges peace and unity ahead of the Edo State gubernatorial election. Mr. Dickson Omoregie, ICD's Country Representative, congratulates candidates and emphasises viewing Edo State as a collective project, not a personal venture. He calls for realistic campaign promises and urges leaders to discourage violence. ICD also announces scholarships for Edo youth, promoting education and empowerment. Join us in building a peaceful future for Edo!",
      date: "June 20, 2023",
      link: "https://tgnews.com.ng/institute-for-cultural-diplomacy-calls-for-peace-in-the-forthcoming-guber-election-promises-scholarship-for-edo-youth/",
    },
  ];

  return (
    <div className="max-w-[1500px] md:px-[50px] px-6 mx-auto">
      <div className="grid grid-cols-1 py- gap-y-10 md:grid-cols-2">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`space-y-3 py-8  border-t  ${
                (index + 1) % 2 == 0 ? "md:pl-8" : "md:border-r md:pr-8"
              } `}
            >
              <a href={item.link}>
                <img className="w-full" src={item.img} alt="" />
              </a>
              <a href={item.link}>
                <h2 className="md:text-[22px] pt-4 font-semibold">
                  {item.title}
                </h2>
              </a>
              <p className="text-neutral-500 text-[13px]">{item.date}</p>
              <p className="text-[14px] text-neutral-500 font-medium">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 py-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {items1.map((item, index) => {
          return (
            <div
              key={index}
              className={`space-y-3 py-8  border-t  ${
                (index + 1) % 3 == 0 ? "md:pl-4" : "lg:border-r md:pr-4"
              } ${(index + 1) % 2 == 0 ? "md:pl-4" : ""} `}
            >
              <a href={item.link}>
                <img className="w-full h-[400px]" src={item.img} alt="" />
              </a>
              <a href={item.link}>
                <h2 className="md:text-[22px] pt-4 font-semibold">
                  {item.title}
                </h2>
              </a>
              <p className="text-neutral-500 text-[13px]">{item.date}</p>
              <p className="text-[14px] text-neutral-500 font-medium">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default New;
