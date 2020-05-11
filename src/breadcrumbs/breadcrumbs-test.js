import { expect } from 'chai';
import 'steal-mocha';
import BulmaBreadcrumbs from './breadcrumbs';

describe('Breadcrumbs', () => {
	beforeEach(() => {
		this.breadcrumbs = new BulmaBreadcrumbs().initialize({
			items: [{
				label: 'Bulma',
				href: '#'
			},{
				label: 'CanJS',
				href: '#'
			}]
		});
		this.breadcrumbs.connect();
	});

	afterEach(() => {
		this.breadcrumbs.disconnect();
	});

	describe('Items', () => {
		it('Has items', () => {
			expect(this.breadcrumbs.items.length).to.equal(2);
		});

		it('last item should be active', () => {
			
			const items = this.breadcrumbs.items;
			expect(items[items.length - 1].active).to.be.true;
			items.push({
				label: 'Foo',
				href: '#'
			});
			expect(items[items.length - 1].label).to.eq('Foo');
			expect(items[items.length - 1].active).to.be.true;
		});
	});

	describe('alignment', () => {
		it('is-centered', () => {
			this.breadcrumbs.alignment = 'centered';
			expect(this.breadcrumbs.classnames).to.equal('breadcrumb is-centered');
		});

		it('is-right', () => {
			this.breadcrumbs.alignment = 'right';
			expect(breadcrumbs.classnames).to.equal('breadcrumb is-right');
		});
	});

	describe('separator', () => {
		it('has-arrow-separator', () => {
			this.breadcrumbs.separator = 'arrow';
			expect(breadcrumbs.classnames).to.equal('breadcrumb has-arrow-separator');
		});

		it('has-bullet-separator', () => {
			this.breadcrumbs.separator = 'bullet';
			expect(breadcrumbs.classnames).to.equal('breadcrumb has-bullet-separator');
		});

		it('has-dot-separator', () => {
			this.breadcrumbs.separator = 'dot';
			expect(breadcrumbs.classnames).to.equal('breadcrumb has-dot-separator');
		});

		it('has-succeeds-separator', () => {
			this.breadcrumbs.separator = 'succeeds';
			expect(breadcrumbs.classnames).to.equal('breadcrumb has-succeeds-separator');
		});
	});

	describe('size', () => {
		it('small', () => {
			this.breadcrumbs.size = 'small';
			expect(breadcrumbs.classnames).to.equal('breadcrumb is-small');
		});

		it('medium', () => {
			this.breadcrumbs.size = 'medium';
			expect(breadcrumbs.classnames).to.equal('breadcrumb is-medium');
		});

		it('large', () => {
			this.breadcrumbs.size = 'large';
			expect(breadcrumbs.classnames).to.equal('breadcrumb is-large');
		});
	});
});