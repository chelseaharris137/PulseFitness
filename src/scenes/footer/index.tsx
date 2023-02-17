import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "@/assets/images/Logo.png";
import { SelectedPage } from "@/shared/types";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-300 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width="150" />
          <p className="my-5">
          Pulse Fitness is committed to helping members build sustainable healthy habits and achieve long-term success. Join us at Pulse Fitness and discover a new level of fitness, health, and vitality.
          </p>
          <p>© Pulse Fitness All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <br/>
          <AnchorLink
            className="text-sm font-bold text-primary-200 hover:text-primary-500"
            onClick={() => setSelectedPage(SelectedPage.Benefits)}
            href={`#${SelectedPage.Benefits}`}
          >
            <p>Benefits</p>
        </AnchorLink>
        <AnchorLink
            className="text-sm font-bold text-primary-200 hover:text-primary-500"
            onClick={() => setSelectedPage(SelectedPage.OurClasses)}
            href={`#${SelectedPage.OurClasses}`}
          >
            <p>Our Classes</p>
        </AnchorLink>
        <AnchorLink
            className="text-sm font-bold text-primary-200 hover:text-primary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Become a Member</p>
        </AnchorLink>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Our team is ready to answer your questions.</p>
          <p>(000)000-0000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
