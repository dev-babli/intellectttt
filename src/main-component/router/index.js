import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ServicePage from '../ServicePage/ServicePage';
import AboutUsPage from "../AboutUsPage/AboutUsPage";
// import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
// import PricingPage from '../PricingPage/PricingPage';
// import CaseStudyPage from '../CaseStudyPage/CaseStudyPage';
// import CaseStudySingle from '../CaseStudySingle/CaseStudySingle';
// import PortfolioSingle from '../PortfolioSingle/PortfolioSingle';
// import CareerPage from '../CareerPage/CareerPage';
// import CareerSingle from '../CareerSingle/CareerSingle';
// import TeamPage from '../TeamPage/TeamPage';
// import TermsPage from '../TermsPage/TermsPage';
// import PrivacyPage from '../PrivacyPage/PrivacyPage';
import BlogPage from "../BlogPage/BlogPage";
// import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import AIAndGenAIPpractice from "../AIAndGenAIPpractice/AIAndGenAIPpractice";
import CloudAndAppServices from "../CloudAndAppServices/CloudAndAppServices";
import SAPServices from "../SAPServices/SAPServices";
import DataAndAnalytics from "../DataAndAnalytics/DataAndAnalytics";
import EngineeringManufacturingIT from "../EngineeringManufacturingIT/EngineeringManufacturingIT";
import HealthcareLifeSciencesIT from "../HealthcareLifeSciencesIT/HealthcareLifeSciencesIT";
import TalentSolutions from "../TalentSolutions/TalentSolutions";
import ManagedITServices from "../ManagedITServices/ManagedITServices";
import CurrentOpenings from "../CurrentOpenings/CurrentOpenings";
import LifeAtCompany from "../LifeAtCompany/LifeAtCompany";
import TalentNetworks from "../TalentNetworks/TalentNetworks";
import AerospaceAndDefenses from "../AerospaceAndDefense/AerospaceAndDefenses";

import MenufacturingAndAutomotive from "../MenufacturingAndAutomotive/MenufacturingAndAutomotive";
import BankingAndFinancial from "../BankingAndFinancial/BankingAndFinancial";
import App from "../../App";
import OurJourny from "../OurJourney/OurJourny";
import LeaderShipTeam from "../LeaderShipTeam/LeaderShipTeam";

import NewsAndAnnouncement from "../NewsAndAnnouncement/NewsAndAnnouncement";
import Whitepapers from "../Whitepapers/Whitepapers";
import LLMIntegration from "../LLMIntegration/LLMIntegration";
import AgenticAI from "../AgenticAI/AgenticAI";
import NLPComputerVision from "../NLPComputerVision/NLPComputerVision";
import MLEngineeringMLOps from "../MLEngineeringMLOps/MLEngineeringMLOps";
import AIAutomation from "../AIAutomation/AIAutomation";
import ResponsibleAI from "../ResponsibleAI/ResponsibleAI";
import CloudEngineering from "../CloudAndAppServices/CloudEngineering";
import DevOpsAndDevSecOps from "../CloudAndAppServices/DevOpsAndDevSecOps";
import AppModernization from "../CloudAndAppServices/AppModernization";
import ApiIntegration from "../CloudAndAppServices/ApiIntegration";
import SAPMigration from "../SAPServices/SAPMigration";
import SAPBTPDevelopment from "../SAPServices/SAPBTPDevelopment";
import SAPManagedSupport from "../SAPServices/SAPManagedSupport";
import InfraNetworkMonitoring from "../ManagedITServices/InfraNetworkMonitoring";
import ApplicationSupport from "../ManagedITServices/ApplicationSupport";
import ITSMServiceDesk from "../ManagedITServices/ITSMServiceDesk";
import ManagedResourceServices from "../ManagedITServices/ManagedResourceServices";
import DataEngineeringETL from "../DataAndAnalytics/DataEngineeringETL";
import BusinessIntelligenceDashboards from "../DataAndAnalytics/BusinessIntelligenceDashboards";
import DataGovernanceSecurity from "../DataAndAnalytics/DataGovernanceSecurity";
import DataToolsIntegration from "../DataAndAnalytics/DataToolsIntegration";
import PLMCADAutomation from "../EngineeringManufacturingIT/PLMCADAutomation";
import MESIntegrationIoT from "../EngineeringManufacturingIT/MESIntegrationIoT";
import DigitalTwinsFactory from "../EngineeringManufacturingIT/DigitalTwinsFactory";
import Industry4Solutions from "../EngineeringManufacturingIT/Industry4Solutions";
import ComplianceRegulatoryIT from "../HealthcareLifeSciencesIT/ComplianceRegulatoryIT";
import AIImagingDiagnostics from "../HealthcareLifeSciencesIT/AIImagingDiagnostics";
import ClinicalDataPlatforms from "../HealthcareLifeSciencesIT/ClinicalDataPlatforms";
import HL7FHIRIntegration from "../HealthcareLifeSciencesIT/HL7FHIRIntegration";
import CorpToCorpW2 from "../TalentSolutions/CorpToCorpW2";
import DirectHireContractToHire from "../TalentSolutions/DirectHireContractToHire";
import HealthcareLifeSciencesStaffing from "../TalentSolutions/HealthcareLifeSciencesStaffing";
import ITStaffAugmentation from "../TalentSolutions/ITStaffAugmentation";
import { Group } from "lucide-react";
import GroupCompani from "../GroupCompanys/GroupCompani";
import CyberSecurity from "../CyberSecurity/CyberSecurity";
import DigitalTransformation from "../DigitalTransformation/DigitalTransformation";
import Innovation from "../Innovation/Innovation";
import Partners from "../../pages/Partners";
import GlobalPresence from "../../components/GlobalPresence/GlobalPresence";
import HealthCareAndLifeSc from "../HealthCareAndLifeSc/HealthCareAndLifeSc";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />

            <Route path="about" element={<AboutUsPage />} />
            <Route>
              {/* Ai & Gen AI */}
              <Route
                path="service/ai-and-gen-ai"
                element={<AIAndGenAIPpractice />}
              />
              <Route
                path="service/ai-and-gen-ai/llm"
                element={<LLMIntegration />}
              />
              <Route
                path="service/ai-and-gen-ai/agents"
                element={<AgenticAI />}
              />
              <Route
                path="service/ai-and-gen-ai/nlp"
                element={<NLPComputerVision />}
              />
              <Route
                path="service/ai-and-gen-ai/mlops"
                element={<MLEngineeringMLOps />}
              />
              <Route
                path="service/ai-and-gen-ai/automation"
                element={<AIAutomation />}
              />
              <Route
                path="service/ai-and-gen-ai/responsible"
                element={<ResponsibleAI />}
              />
              {/* Cloud */}
              <Route
                path="service/cloud-and-application-services"
                element={<CloudAndAppServices />}
              />
              <Route
                path="service/cloud-and-application-services/engineering"
                element={<CloudEngineering />}
              />
              <Route
                path="service/cloud-and-application-services/devops"
                element={<DevOpsAndDevSecOps />}
              />
              <Route
                path="service/cloud-and-application-services/modernization"
                element={<AppModernization />}
              />
              <Route
                path="service/cloud-and-application-services/api"
                element={<ApiIntegration />}
              />
              {/* SAP */}
              <Route path="service/sap-services" element={<SAPServices />} />
              <Route
                path="service/sap-services/s4hana"
                element={<SAPMigration />}
              />
              <Route
                path="service/sap-services/btp"
                element={<SAPBTPDevelopment />}
              />
              <Route
                path="service/sap-services/ams"
                element={<SAPManagedSupport />}
              />
              {/* Managed IT */}
              <Route
                path="/service/managed-it-services"
                element={<ManagedITServices />}
              />
              <Route
                path="service/managed-it-services/infra"
                element={<InfraNetworkMonitoring />}
              />
              <Route
                path="service/managed-it-services/support"
                element={<ApplicationSupport />}
              />
              <Route
                path="service/managed-it-services/itsm"
                element={<ITSMServiceDesk />}
              />
              <Route
                path="service/managed-it-services/tms"
                element={<ManagedResourceServices />}
              />
              {/* Data */}
              <Route
                path="service/data-and-analytics"
                element={<DataAndAnalytics />}
              />
              <Route
                path="service/data-and-analytics/etl"
                element={<DataEngineeringETL />}
              />
              <Route
                path="service/data-and-analytics/bi"
                element={<BusinessIntelligenceDashboards />}
              />
              <Route
                path="service/data-and-analytics/governance"
                element={<DataGovernanceSecurity />}
              />
              <Route
                path="service/data-and-analytics/tools"
                element={<DataToolsIntegration />}
              />
              {/* Engineering */}
              <Route
                path="service/engineering-and-manufacturing-it"
                element={<EngineeringManufacturingIT />}
              />
              <Route
                path="service/engineering-and-manufacturing-it/plm"
                element={<PLMCADAutomation />}
              />
              <Route
                path="service/engineering-and-manufacturing-it/mes" 
                element={<DigitalTwinsFactory />}
              />
              <Route
                path="service/engineering-and-manufacturing-it/twins"
                element={<MESIntegrationIoT />}
              />
              <Route
                path="service/engineering-and-manufacturing-it/industry4"
                element={<Industry4Solutions />}
              />
              {/* Health */}
              <Route
                path="service/healthcare-and-life-sciences-it"
                element={<HealthcareLifeSciencesIT />}
              />

              <Route
                path="service/healthcare-and-life-sciences-it/hl7"
                element={<HL7FHIRIntegration />}
              />
              <Route
                path="service/healthcare-and-life-sciences-it/data"
                element={<ClinicalDataPlatforms />}
              />
              <Route
                path="service/healthcare-and-life-sciences-it/ai"
                element={<AIImagingDiagnostics />}
              />
              <Route
                path="service/healthcare-and-life-sciences-it/compliance"
                element={<ComplianceRegulatoryIT />}
              />
              {/* Talent */}
              <Route path="service/talent-solutions" element={<TalentSolutions />} />
              <Route
                path="service/talent-solutions/staffing"
                element={<ITStaffAugmentation />}
              />
              <Route
                path="service/talent-solutions/healthcare"
                element={<HealthcareLifeSciencesStaffing />}
              />
              <Route
                path="service/talent-solutions/direct-hire"
                element={<DirectHireContractToHire />}
              />
              <Route
                path="service/talent-solutions/corp"
                element={<CorpToCorpW2 />}
              />
            </Route>

            <Route path="careers">
              <Route path="current-openings" element={<CurrentOpenings />} />

              <Route path="life-at-company" element={<LifeAtCompany />} />

              <Route
                path="hiring-process"
                element={<TalentNetworks />}
              />
            </Route>
            <Route path="industries">
              <Route
                path="helthcare-and-life-sciences"
                element={<HealthCareAndLifeSc />}
              />
              <Route
                path="aerospace-and-defense"
                element={<AerospaceAndDefenses />}
              />

              <Route
                path="menufacturing-and-automotive"
                element={<MenufacturingAndAutomotive />}
              />
              <Route
                path="banking-and-financial-services"
                element={<BankingAndFinancial />}
              />
            </Route>
            <Route path="Company">
              <Route path="our-journey" element={<OurJourny />} />
              <Route path="global-presence" element={<GlobalPresence />} />
              <Route path="leadership-team" element={<LeaderShipTeam />} />
            </Route>
            <Route path="insights">
              <Route path="blog" element={<BlogPage />} />
              <Route
                path="whitepapers-and-case-studies"
                element={<Whitepapers />}
              />
              <Route
                path="news-and-announcements"
                element={<NewsAndAnnouncement />}
              />
            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="partners" element={<Partners />} />
            
            {/* New Hero Section Routes */}
            <Route path="cybersecurity" element={<CyberSecurity />} />
            <Route path="digital-transformation" element={<DigitalTransformation />} />
            <Route path="innovation" element={<Innovation />} />
            
            {/* Additional Service Routes */}
            <Route path="service/cloud-and-application-services" element={<CloudAndAppServices />} />
            <Route path="service/managed-it-services" element={<ManagedITServices />} />
            
            {/* Blog Routes */}
            <Route path="blog/data-ai-commitment" element={<BlogPage />} />
            <Route path="blog/agentic-ai-software-delivery" element={<BlogPage />} />
            <Route path="podcast/biztech-forward-season2" element={<BlogPage />} />
            
            {/* Company Routes */}
            <Route path="company/our-journey" element={<OurJourny />} />
            <Route path="company/global-presence" element={<GlobalPresence />} />
            <Route path="company/leadership-team" element={<LeaderShipTeam />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
