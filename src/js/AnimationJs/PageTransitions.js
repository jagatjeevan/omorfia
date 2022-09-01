import { close4Popup } from '../popup/four-page-actions.js';
import { close3Popup } from '../popup/three-page-actions.js';
import { close2Popup } from '../popup/two-page-actions.js';
import { exitAwesomePartner, loadAwesomePartner } from './AwesomePartnerAnimation.js';
import { exitCommercialSuccess, loadCommercialSuccess } from './CommercialSuccessAnimation.js';
import { exitScreen1, loadScreen1 } from './HomePageAnimation.js';
import {
  exitPositiveSocialChange,
  loadPositiveSocialChange,
} from './PositiveSocialChangeAnimation.js';
import { exitRevolutionizeTech, loadRevolutionizeTech } from './RevolutionizeTechAnimation.js';
import { exitVibrantCommunity, loadVibrantCommunity } from './VibrantCommunityAnimation.js';

var currentPage = 'screen1';
var newPage;
var previousPages = [];

const exitTimeMap = {
  screen1: 3000,
  positiveSocialChange: 1000,
  commercialSuccess: 1000,
  vibrantCommunity: 1000,
  awesomePartner: 1000,
  revolutionizeTech: 1000,
};
const loadTimeMap = {
  screen1: 3500,
  positiveSocialChange: 2000,
  commercialSuccess: 2000,
  vibrantCommunity: 2000,
  awesomePartner: 2000,
  revolutionizeTech: 2000,
};

const exitPages = () => {
  if (newPage !== 'positiveSocialChange') exitPositiveSocialChange();
  if (newPage !== 'commercialSuccess') exitCommercialSuccess();
  if (newPage !== 'vibrantCommunity') exitVibrantCommunity();
  if (newPage !== 'awesomePartner') exitAwesomePartner();
  if (newPage !== 'revolutionizeTech') exitRevolutionizeTech();
  close2Popup();
  close3Popup();
  close4Popup();
};

const exitScreen1Page = () => {
  exitScreen1(newPage);
};

const loadNewPage = () => {
  if (newPage === 'screen1') loadScreen1();
  if (newPage === 'positiveSocialChange') loadPositiveSocialChange();
  if (newPage === 'commercialSuccess') loadCommercialSuccess();
  if (newPage === 'vibrantCommunity') loadVibrantCommunity();
  if (newPage === 'awesomePartner') loadAwesomePartner();
  if (newPage === 'revolutionizeTech') loadRevolutionizeTech();
};

const navTransitions = () => {
  const navColorMap = {
    screen1: '#003d50',
    positiveSocialChange: '#f2617a',
    commercialSuccess: '#cc850a',
    vibrantCommunity: '#6b9e78',
    awesomePartner: '#634f7d',
    revolutionizeTech: '#47a1ad',
  };

  gsap
    .fromTo(
      `.nav-${newPage}`,
      {
        height: '0px',
        backgroundColor: 'white',
        color: '#003d50',
      },
      {
        duration: 1.3,
        backgroundColor: navColorMap[newPage],
        color: 'white',
        height: '56px',
      },
    )
    .delay(0.3);

  gsap
    .fromTo(
      `.nav-${currentPage}`,
      {
        backgroundColor: navColorMap[currentPage],
        color: 'white',
        height: '56px',
      },
      {
        duration: 1.3,
        height: '0px',
        backgroundColor: 'white',
        color: '#003d50',
      },
    )
    .delay(0.3);
};

export const pageTransition = (newPageName, isBackButton) => {
  if (currentPage === newPageName) return;

  newPage = newPageName;

  if (currentPage === 'screen1') exitScreen1Page();
  else exitPages();

  navTransitions();
  const loadTime = currentPage === 'screen1' ? 300 : loadTimeMap[newPage];
  const transitionTime = exitTimeMap[currentPage] + loadTime;

  if (!isBackButton) previousPages.push(currentPage);
  currentPage = newPageName;

  loadNewPage();
  $('.main-content').scrollTop(0);

  return transitionTime;
};

export const backPageTransition = () => {
  var lastPage = previousPages.pop();

  return pageTransition(lastPage, true);
};
