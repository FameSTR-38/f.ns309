import React from "react";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <Banner
      title="Our Terms and Conditions"
      subtitle="MANSORY Design & Holding GmbH is the sole owner of the information collected on its websites within their domains. MANSORY Design & Holding GmbH collects information from its users at several different points on its website. Other than for specific purposes as agreed with the user, the information that is collected through these websites is used for marketing and analysis purposes only. 
          
        Information gathered through these websites will be held in a database and will be used periodically to assess the success of the website and to monitor its activity. 
        
        Though MANSORY Design & Holding GmbH makes every effort to preserve users privacy, it may need to disclose personal information when required by law wherein it has a good-faith belief that such action is necessary to comply with a current judicial proceeding, a court order or legal process served on its websites. 
        
        Owing to MANSORY Design & Holding GmbH policy of continuous development, the right is reserved to change specifications, prices or any other details at any time. "
      subtitle2="In the event that MANSORY Design & Holding GmbH goes through a business transition, such as a merger, an acquisition by another company or selling a portion of its assets, users personal information will, in most instances, be part of the assets transferred. If, as a result of a business transition, a users personally identifiable information is used in a manner different from that stated at the time of collection, the user is advised to review these terms and to unsubscribe (see below) if the terms have changed unsatisfactorily. 
        MANSORY Design & Holding GmbH will occasionally update these Terms of use MANSORY Design & Holding GmbH encourages users to review these terms periodically to be informed of how MANSORY Design & Holding GmbH is protecting users information.
        This website contains links to other websites. Please be aware that MANSORY Design & Holding GmbH is not responsible for the privacy practices of such other websites. 
        
        To unsubscribe, simply send MANSORY Design & Holding GmbH an e-mail to info@mansory.com.
        
        If you have any questions or suggestions regarding MANSORY Design & Holding GmbH privacy policy, please e-mail info@mansory.com."
    >
      <Link to="/rooms" className="btn-primary">
        Go back to Cars
      </Link>
    </Banner>
  );
}
