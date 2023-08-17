import "./style.scss";
import instagram from "../../../assets/icons/insta.svg";
import whatsapp from "../../../assets/icons/whatsapp.svg";
import facebook from "../../../assets/icons/facebook.svg";
const index = () => {
  return (
    <footer className="pb-[33px] ">
      <div className="container mx-auto">
        <div className="wrapper flex justify-between pt-[58px]">
          <ul>
            <li>
              <a className="font-[Regular] text-[16px]" href="#">
                Title
              </a>
            </li>
            <li className="mt-[18px] mb-[18px]">
              <a className="text-[12px] " href="#">
                +998991234567
              </a>
            </li>
            <div className="flex gap-5">
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a className="font-[Regular] text-[16px]" href="#">
                Help
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Delivery information
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Payment information
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Customer service
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a className="font-[Regular] text-[16px]" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Our Stores
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Flower care
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Site map
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li>
              <a className="font-[Regular] text-[16px]" href="#">
                Legal
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Privacy policy
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Cookie policy
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Item 4
              </a>
            </li>
            <li>
              <a className="font-[Regular] text-[14px]" href="#">
                Item 4
              </a>
            </li>
          </ul>
        </div>
        <hr className="mt-[60px]" />
        <p className="text-[#AFB1BD] font-[Regular] text-[12px] mt-5">
          © Copyright, SERIUS{" "}
        </p>
      </div>
    </footer>
  );
};

export default index;
