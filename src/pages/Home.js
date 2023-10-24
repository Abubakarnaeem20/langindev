import ContainerHeaderText1 from "../components/ContainerHeaderText1";
import ContainerHeaderText from "../components/ContainerHeaderText";
import GrowthContainer from "../components/GrowthContainer";
import Container1 from "../components/Container1";
import FormContainer from "../components/FormContainer";
import SectionFeature from "../components/SectionFeature";
import SoftwareBusinessesWebsiteCard1 from "../components/SoftwareBusinessesWebsiteCard1";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import GroupComponent1 from "../components/GroupComponent1";
import BusinessThriveSupervisionConta from "../components/BusinessThriveSupervisionConta";
import FormContainer1 from "../components/FormContainer1";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ContainerHeaderText1 />
      <div className="home-inner">
        <div className="group-child" />
      </div>
      <div className="section-feature">
        <ContainerHeaderText />
        <div className="section-feature-inner">
          <div className="group-child" />
        </div>
      </div>
      <GrowthContainer />
      <div className="section-faq">
        <Container1 />
        <div className="section-faq-inner">
          <div className="frequently-asked-questions-parent">
            <b className="frequently-asked-questions">
              Frequently asked questions
            </b>
            <div className="whats-happening-around">
              Whats happening around the World.
            </div>
          </div>
        </div>
      </div>
      <FormContainer
        iconlyLightOutlineTickSqu="/iconlylightoutlinetick-square2.svg"
        iconlyLightOutlineTimeCir="/iconlylightoutlinetime-circle.svg"
        iconlyLightOutlineUpload="/iconlylightoutlineupload.svg"
      />
      <SectionFeature />
      <SoftwareBusinessesWebsiteCard1 />
      <FormContainer
        iconlyLightOutlineTickSqu="/iconlylightoutlinetick-square4.svg"
        iconlyLightOutlineTimeCir="/iconlylightoutlinetick-square5.svg"
        iconlyLightOutlineUpload="/iconlylightoutlinetick-square6.svg"
        propTop="4121px"
        propBorderRadius="unset"
      />
      <Footer />
      <ContactForm />
      <GroupComponent1 />
      <img className="group-icon" alt="" src="/group.svg" />
      <img className="group-icon1" alt="" src="/group.svg" />
      <img className="group-icon2" alt="" src="/group1.svg" />
      <img className="group-icon3" alt="" src="/group1.svg" />
      <img className="group-icon4" alt="" src="/group1.svg" />
      <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      <div className="home-child">
        <div className="rectangle-parent">
          <div className="group-inner" />
          <b className="new-visitors">New visitors</b>
          <b className="b">84%</b>
          <div className="div">+0.4%</div>
          <div className="credit-parent">
            <div className="credit" />
            <div className="credit1" />
            <div className="credit2" />
            <div className="credit3" />
            <div className="credit4" />
            <div className="credit5" />
            <div className="credit6" />
            <div className="m">M</div>
            <div className="t">T</div>
            <div className="w">W</div>
            <div className="t1">T</div>
            <div className="f">F</div>
            <div className="s">S</div>
            <div className="s1">S</div>
          </div>
        </div>
      </div>
      <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
      <div className="group-div">
        <BusinessThriveSupervisionConta />
      </div>
      <img className="icon" alt="" src="/icon.svg" />
      <img className="icon1" alt="" src="/icon1.svg" />
      <img className="image-17-icon" alt="" src="/image-17@2x.png" />
      <FormContainer1 />
      <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      <div className="home-inner1">
        <div className="rectangle-group">
          <div className="rectangle-div" />
          <b className="new-visitors1">New visitors</b>
          <b className="b1">84%</b>
          <div className="div1">+0.4%</div>
          <div className="credit-group">
            <div className="credit7" />
            <div className="credit8" />
            <div className="credit9" />
            <div className="credit10" />
            <div className="credit11" />
            <div className="credit12" />
            <div className="credit13" />
            <div className="m1">M</div>
            <div className="t2">T</div>
            <div className="w1">W</div>
            <div className="t3">T</div>
            <div className="f1">F</div>
            <div className="s2">S</div>
            <div className="s3">S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
