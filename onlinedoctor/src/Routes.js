import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationNavPage from "./pages/NavigationNavPage";
import FormsNavPage from "./pages/FormsNavPage";
import TablesNavPage from "./pages/TablesNavPage";
import AddonsNavPage from "./pages/AddonsNavPage";
import ModalsNavPage from "./pages/ModalsNavPage";
import AdvancedNavPage from "./pages/AdvancedNavPage";
import ComponentsNavPage from "./pages/ComponentsNavPage";

// FREE
import AnimationPage from "./pages/AnimationPage";
import AlertPage from "./pages/AlertPage";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import CSSPage from "./pages/CSSPage";
import TablePage from "./pages/TablePage";
import TableResponsivePage from "./pages/TableResponsivePage";
import TableScrollPage from "./pages/TableScrollPage";
import TableStylesPage from "./pages/TableStylesPage";
import BadgePage from "./pages/BadgePage";
import BreadcrumbPage from "./pages/BreadcrumbPage";
import FaPage from "./pages/FaPage";
import DatatablePage from "./pages/DatatablePage";
import DatatableApiPage from "./pages/DatatableApiPage";
import ModalPage from "./pages/ModalPage";
import ModalFormPage from "./pages/ModalFormPage";
import ModalExamplesPage from "./pages/ModalExamplesPage";
import ProgressPage from "./pages/ProgressPage";
import InputPage from "./pages/InputPage";
import MediaPage from "./pages/MediaPage";
import JumbotronPage from "./pages/JumbotronPage";
import NotificationPage from "./pages/NotificationPage";
import CardsPage from "./pages/CardsPage";
import PaginationPage from "./pages/PaginationPage";
import PopoverPage from "./pages/PopoverPage";
import ListGroupPage from "./pages/ListGroupPage";
import CarouselPage from "./pages/CarouselPage";
import PanelPage from "./pages/PanelPage";
import CollapsePage from "./pages/CollapsePage";
import TooltipsPage from "./pages/TooltipsPage";
import FooterPage from "./pages/FooterPage";
import MasksPage from "./pages/MasksPage";
import DropdownPage from "./pages/DropdownPage";
import VideoCarouselPage from "./pages/VideoCarouselPage";
import HoverPage from "./pages/HoverPage";
import FormsPage from "./pages/FormsPage";
import ChartsPage from "./pages/ChartsPage";
import SearchPage from "./pages/SearchPage";
import ValidationPage from "./pages/ValidationPage";
import NavbarPage from "./pages/NavbarPage";
import IframePage from "./pages/IframePage";
import EdgeHeaderPage from "./pages/EdgeHeaderPage"

// PRO-START
import SectionsNavPage from "./pages/pro/sections/SectionsNavPage";
import MaterialDropdownPage from "./pages/pro/DropdownPage";
import AutocompletePage from "./pages/pro/AutocompletePage";
import ButtonPagePro from "./pages/pro/ButtonPage";
import ChartsPagePro from "./pages/pro/ChartsPage";
import ChatPage from "./pages/pro/ChatPage";
import ChipsPage from "./pages/pro/ChipsPage";
import InputPagePro from "./pages/pro/InputPage";
import CollapsePagePro from "./pages/pro/CollapsePage";
import ScrollBarPage from "./pages/pro/ScrollBarPage";
import ScrollSpyPage from "./pages/pro/ScrollSpyPage";
import SelectPage from "./pages/pro/SelectPage";
import SideNavPage from "./pages/pro/SideNavPage";
import DatePickerPage from "./pages/pro/DatePickerPage";
import DoubleNavigationPage from "./pages/pro/DoubleNavigationPage";
import TimePickerPage from "./pages/pro/TimePickerPage";
import StickyPage from "./pages/pro/StickyPage";
import LightboxPage from "./pages/pro/LightboxPage";
import MultiCarouselPage from "./pages/pro/MultiCarouselPage";
import SpinnerPage from "./pages/pro/SpinnerPage";
import TabsPage from "./pages/pro/TabsPage";
import ThumbnailsCarousel from "./pages/pro/ThumbnailsCarousel";
import TestimonialsPage from "./pages/pro/sections/TestimonialsPage";
import TestimonialsMultiPage from "./pages/pro/sections/TestimonialsMultiPage";
import EcommercePage from "./pages/pro/sections/EcommercePage";
import AppPage from "./pages/pro/sections/AppPage";
import ContactFormPage from "./pages/pro/sections/ContactFormPage";
import ClassicFormPage from "./pages/pro/sections/ClassicFormPage";
import VideoBackgroundPage from "./pages/pro/sections/VideoBackgroundPage";
import ProjectsPage from "./pages/pro/sections/ProjectsPage";
import FeaturesPage from "./pages/pro/sections/FeaturesPage";
import ContactPage from "./pages/pro/sections/ContactPage";
import SocialButtonsPage from "./pages/pro/SocialButtonsPage";
import StepperPage from "./pages/pro/StepperPage";
import BlogPage from "./pages/pro/sections/BlogPage";
import TeamPage from "./pages/pro/sections/TeamPage";
import MagazinePage from "./pages/pro/sections/MagazinePage";
import SocialPage from "./pages/pro/sections/SocialPage";
import FormsPagePro from "./pages/pro/FormsPage";
import CardsPagePro from "./pages/pro/CardsPage";
import SearchPagePro from "./pages/pro/SearchPage";
import FooterPagePro from "./pages/pro/FooterPage";
import TableEditable from "./pages/pro/TableEditablePage";
import DatatableCsvPage from "./pages/pro/DatatableCsvPage";
import ModalFormProPage from "./pages/pro/ModalFormPage";
import HabmburgerMenuPage from "./pages/pro/HabmburgerMenuPage";
import TimelinePage from "./pages/pro/TimelinePage";
import SliderPage from "./pages/pro/SliderPage";
import StreakPage from "./pages/pro/StreakPage";
import ValidationPagePro from "./pages/pro/ValidationPage";
import FlippingCardsPage from "./pages/pro/FlippingCardsPage";
// PRO-END

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/css" component={CSSPage} />
        <Route exact path="/components" component={ComponentsNavPage} />
        <Route exact path="/advanced" component={AdvancedNavPage} />
        <Route exact path="/navigation" component={NavigationNavPage} />
        <Route exact path="/forms" component={FormsNavPage} />
        <Route exact path="/tables" component={TablesNavPage} />
        <Route exact path="/modals" component={ModalsNavPage} />
        <Route exact path="/addons" component={AddonsNavPage} />

        {/* FREE */}
        <Route path="/css/animations" component={AnimationPage} />
        <Route exact path="/tables/table" component={TablePage} />
        <Route
          path="/tables/table-responsive"
          component={TableResponsivePage}
        />
        <Route path="/tables/table-scroll" component={TableScrollPage} />
        <Route path="/tables/table-styles" component={TableStylesPage} />
        <Route path="/components/badge" component={BadgePage} />
        <Route path="/navigation/breadcrumb" component={BreadcrumbPage} />
        <Route path="/navigation/navbar" component={NavbarPage} />
        <Route path="/components/media" component={MediaPage} />
        <Route path="/forms/input" component={InputPage} />
        <Route path="/addons/pro/notification" component={NotificationPage} />
        <Route path="/components/dropdown" component={DropdownPage} />
        <Route path="/css/icons" component={FaPage} />
        <Route path="/css/jumbotron" component={JumbotronPage} />
        <Route path="/components/cards" component={CardsPage} />
        <Route path="/components/buttons" component={ButtonPage} />
        <Route path="/forms/forms" component={FormsPage} />
        <Route path="/components/progress" component={ProgressPage} />
        <Route path="/advanced/popover" component={PopoverPage} />
        <Route path="/components/pagination" component={PaginationPage} />
        <Route path="/components/list-group" component={ListGroupPage} />
        <Route path="/advanced/tooltips" component={TooltipsPage} />
        <Route path="/navigation/footer" component={FooterPage} />
        <Route path="/modals/modal" component={ModalPage} />
        <Route path="/modals/modal-form" component={ModalFormPage} />
        <Route path="/modals/modal-examples" component={ModalExamplesPage} />
        <Route path="/advanced/carousel" component={CarouselPage} />
        <Route path="/advanced/collapse" component={CollapsePage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/css/masks" component={MasksPage} />
        <Route path="/css/hover" component={HoverPage} />
        <Route path="/advanced/videocarousel" component={VideoCarouselPage} />
        <Route path="/advanced/charts" component={ChartsPage} />
        <Route path="/components/panels" component={PanelPage} />
        <Route path="/components/search" component={SearchPage} />
        <Route path="/forms/validation" component={ValidationPage} />
        <Route path="/tables/datatable" component={DatatablePage} />
        <Route path="/tables/datatable-api" component={DatatableApiPage} />
        <Route path="/addons/iframe" component={IframePage} />
        <Route path="/addons/edge-header" component={EdgeHeaderPage} />
        <Route path="/advanced/alerts" component={AlertPage} />
        {/* PRO-START */}
        <Route path="/addons/pro/flipping-cards" component={FlippingCardsPage} />
        <Route exact path="/sections" component={SectionsNavPage} />
        <Route path="/addons/pro/chat" component={ChatPage} />
        <Route
          path="/components/pro/dropdown"
          component={MaterialDropdownPage}
        />
        <Route path="/advanced/pro/charts" component={ChartsPagePro} />
        <Route path="/forms/pro/autocomplete" component={AutocompletePage} />
        <Route path="/components/pro/buttons" component={ButtonPagePro} />
        <Route path="/advanced/pro/collapse" component={CollapsePagePro} />
        <Route path="/components/pro/chips" component={ChipsPage} />
        <Route path="/forms/pro/input" component={InputPagePro} />
        <Route path="/navigation/pro/sidenav" component={SideNavPage} />
        <Route path="/forms/pro/select" component={SelectPage} />
        <Route path="/advanced/pro/datepicker" component={DatePickerPage} />
        <Route path="/advanced/pro/timepicker" component={TimePickerPage} />
        <Route path="/advanced/pro/lightbox" component={LightboxPage} />
        <Route path="/forms/pro/slider" component={SliderPage} />
        <Route
          path="/advanced/pro/multicarousel"
          component={MultiCarouselPage}
        />
        <Route path="/addons/pro/timeline" component={TimelinePage} />
        <Route path="/addons/pro/streak" component={StreakPage} />
        <Route path="/components/pro/spinner" component={SpinnerPage} />
        <Route path="/advanced/pro/scrollbar" component={ScrollBarPage} />
        <Route path="/navigation/pro/scrollspy" component={ScrollSpyPage} />
        <Route
          path="/navigation/pro/hamburger-menu"
          component={HabmburgerMenuPage}
        />
        <Route path="/advanced/pro/sticky" component={StickyPage} />
        <Route path="/components/pro/tabs" component={TabsPage} />
        <Route
          path="/advanced/pro/thumbnailscarousel"
          component={ThumbnailsCarousel}
        />
        <Route path="/navigation/pro/double" component={DoubleNavigationPage} />
        <Route
          path="/components/pro/socialbuttons"
          component={SocialButtonsPage}
        />
        <Route path="/forms/pro/forms" component={FormsPagePro} />
        <Route path="/forms/pro/validation" component={ValidationPagePro} />
        <Route path="/components/pro/cards" component={CardsPagePro} />
        <Route path="/components/pro/search" component={SearchPagePro} />
        <Route path="/navigation/pro/footer" component={FooterPagePro} />
        <Route path="/tables/pro/tableeditable" component={TableEditable} />
        <Route path="/components/pro/stepper" component={StepperPage} />
        <Route path="/tables/pro/datatable-csv" component={DatatableCsvPage} />
        <Route path="/modals/pro/modal-form" component={ModalFormProPage} />
        <Route path="/sections/testimonials" component={TestimonialsPage} />
        <Route
          path="/sections/testimonialsMulti"
          component={TestimonialsMultiPage}
        />
        <Route path="/sections/ecommerce" component={EcommercePage} />
        <Route path="/sections/app" component={AppPage} />
        <Route path="/sections/contactform" component={ContactFormPage} />
        <Route path="/sections/classicform" component={ClassicFormPage} />
        <Route
          path="/sections/videobackground"
          component={VideoBackgroundPage}
        />
        <Route path="/sections/projects" component={ProjectsPage} />
        <Route path="/sections/features" component={FeaturesPage} />
        <Route path="/sections/contact" component={ContactPage} />
        <Route path="/sections/blog" component={BlogPage} />
        <Route path="/sections/team" component={TeamPage} />
        <Route path="/sections/magazine" component={MagazinePage} />
        <Route path="/sections/social" component={SocialPage} />
        {/* PRO-END */}
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
