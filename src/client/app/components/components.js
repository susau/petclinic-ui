import angular from 'angular';
    import AdminModule from './admin/admin.module';

const ComponentsModule = angular.module('app.components',[
       AdminModule.name, 
]);

export default ComponentsModule;