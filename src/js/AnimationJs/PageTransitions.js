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
var newPage = 'screen1';
var previousPages = [];

const exitPages = () => {
  if (newPage !== 'positiveSocialChange') exitPositiveSocialChange();
  if (newPage !== 'commercialSuccess') exitCommercialSuccess();
  if (newPage !== 'vibrantCommunity') exitVibrantCommunity();
  if (newPage !== 'awesomePartner') exitAwesomePartner();
  if (newPage !== 'revolutionizeTech') exitRevolutionizeTech();
  close2Popup();
  close3Popup();
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

export const pageTransition = (newPageName) => {
  if (currentPage === newPageName) return;

  newPage = newPageName;

  if (currentPage === 'screen1') exitScreen1Page();
  else exitPages();

  currentPage = newPageName;

  loadNewPage();
};
