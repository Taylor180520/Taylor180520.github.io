import siteHeader from "./components/SiteHeader.html?raw";
import heroSection from "./components/sections/HeroSection.html?raw";
import painSection from "./components/sections/PainSection.html?raw";
import architectureSection from "./components/sections/ArchitectureSection.html?raw";
import ecosystemSection from "./components/sections/EcosystemSection.html?raw";
import ontologySection from "./components/sections/OntologySection.html?raw";
import sharedContextSection from "./components/sections/SharedContextSection.html?raw";
import marketplaceSection from "./components/sections/MarketplaceSection.html?raw";
import factorySection from "./components/sections/FactorySection.html?raw";
import itemGptSection from "./components/sections/ItemGptSection.html?raw";
import itemGptAdminSection from "./components/sections/ItemGptAdminSection.html?raw";
import trainingCatalogSection from "./components/sections/TrainingCatalogSection.html?raw";
import audienceTrainingSection from "./components/sections/AudienceTrainingSection.html?raw";
import deliveryTrainingSection from "./components/sections/DeliveryTrainingSection.html?raw";
import bootcampTrainingSection from "./components/sections/BootcampTrainingSection.html?raw";
import operationsTrainingSection from "./components/sections/OperationsTrainingSection.html?raw";

const sections = [
  heroSection,
  painSection,
  architectureSection,
  ecosystemSection,
  ontologySection,
  sharedContextSection,
  marketplaceSection,
  factorySection,
  itemGptSection,
  itemGptAdminSection,
  trainingCatalogSection,
  audienceTrainingSection,
  deliveryTrainingSection,
  bootcampTrainingSection,
  operationsTrainingSection,
];

export function renderApp(container) {
  container.innerHTML = `${siteHeader}<main>${sections.join("\n")}</main>`;
}
