import angular from 'angular';
import animalsService from './animals/animals';

const ServicesModule = angular.module('app.services', [])
  .service('animalsService', animalsService)

export default ServicesModule;