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
      it('converts the markdown-formatted content into HTML', function(){
        page.content = 'subtitle';
        expect(page.renderedContent).to.equal('<p>subtitle</p>\n');
      });
    });
  });

  describe('Class methods', function () {
    before(function (done) {
      Page.create({
          title: 'foo',
          content: 'bar',
          tags: ['foo', 'bar']
        })
        .then(function () {
          done();
        })
        .catch(done);
    });
    
    describe('findByTag', function () {
      afterEach(function(done){
        Page.sync({force: true})
        .then(function(){
          done()
        })
        .catch(done);
      })
      it('gets pages with the search tag', function(done){
        Page.findByTag('foo')
        .then(function(result){
           expect(result).to.have.lengthOf(1);
          done();
        })
        .catch(done);     
      });
      it('does not get pages without the search tag', function(done){
        Page.findByTag('chicken')
        .then(function(result){
          expect(result).to.have.length(0);
          done()
        })
        .catch(done);
      });
    });
  });

  describe('Instance methods', function () {
    
    beforeEach(function (done) {
      Promise.all([ 
        Page.create({
          title: 'foo',
          content: 'bar',
          tags: ['foo', 'baz']
        }),
        Page.create({
          title: 'foo 2',
          content: 'bar 2',
          tags: ['foo', 'bar']
        }),
        Page.create({
          title: 'foo 3',
          content: 'bar 3',
          tags: ['foo', 'bar', 'baz']
        })
      ])
      .then(function(){
        done();
      })
      .catch(done);
     
    });
    
    
    describe('findSimilar', function () {
      it('never gets itself', function(done){
        Page.findOne({
          where: {
            title: 'foo'
          }
        })
        .then(function(page){
          console.log("page findSimilar =", page.dataValues)
          expect(page.dataValues.findSimilar).to.equal(2);
          
        })
          
        expects()
      });
      it('gets other pages with any common tags', function(done){
        
      });
      it('does not get other pages without any common tags', function(done){
        
      });
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