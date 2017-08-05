const mocha = require('mocha');
const expect = require('chai').expect;
const models = require('../models');
const Page = models.Page;

const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

describe('Page model', function () {
 var page;
 beforeEach(function(){
   page = Page.build();
 });
  describe('Virtuals', function () {
    
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
        page.urlTitle = 'Hostel_Pandas'
        expect(page.route).to.equal('/wiki/Hostel_Pandas');
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');
    });
  });

  describe('Class methods', function () {
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});