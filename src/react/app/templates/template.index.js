import React from 'react';
import {Link} from "react-router-dom";

class TemplateIndex extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			i: 0,
			s: 0,
			m: 0,
			label: '',
			inner: false,
			group: null,
			conf_combat_regen: 0,
			class: 'druid',
			suggestions: []
		}
		this.library_items = [
			{
				type: 'ring',
				label: 'Cauterizing band',
				i: 12
			},
			{
				type: 'ring',
				label: 'Pure elementium band',
				i: 10,
				s: 10
			},
			{
				type: 'enchant_boots',
				label: 'Enchant Boots - Spirit',
				s: 5
			},
			{
				type: 'enchant_boots',
				label: 'Enchant Boots - Lesser Spirit',
				s: 3
			},
			{
				type: 'enchant_bracer',
				label: 'Enchant Bracer - Greater Intellect',
				i: 7
			},
			{
				type: 'enchant_bracer',
				label: 'Enchant Bracer - Superior Spirit',
				s: 9
			},
			{
				type: 'enchant_bracer',
				label: 'Enchant Bracer - Mana Regeneration',
				m: 4
			},
			{
				type: 'enchant_chest',
				label: 'Enchant Chest - Greater stats',
				i: 4,
				s: 4
			},
			{
				type: 'enchant_chest',
				label: 'Enchant Chest - Stats',
				i: 3,
				s: 3
			},
			{
				type: 'enchant_chest',
				label: 'Enchant Chest - Major Mana',
				i: 100/15
			}
		];
	}

	addItem() {
		let item = {
			label: this.state.label,
			i: this.state.i,
			s: this.state.s,
			m: this.state.m,
			conf_combat_regen: 0
		}

		let items = this.state.items;
		items = items.concat([item]);

		if (this.state.label.length > 0) {
			this.setState({
				items: items,
				s: 0,
				i: 0,
				m: 0,
				label: ''
			})
		}
	}

	onChangeLabel(e) {
		let suggestions = [];

		if (e.target.value.length > 1) {
			suggestions = this.library_items.filter(item => item.label.toLowerCase().indexOf(this.state.label.toLowerCase()) >= 0);
		}

		this.setState({
			label: e.target.value,
			suggestions: suggestions
		})
	}

	onChangeI(e) {
		this.setState({
			i: e.target.value
		})
	}

	onChangeS(e) {
		this.setState({
			s: e.target.value
		})
	}


	onChangeM(e) {
		this.setState({
			m: e.target.value
		})
	}

	onChangeClass(e) {
		this.setState({
			class: e.target.value
		})
	}

	onChangeInner(e) {

		let inner = false;

		if (e.target.value == 'enabled') {
			inner = true;
		}

		this.setState({
			inner: inner
		})
	}

	onChangeCombatRegen(e) {
		this.setState({
			conf_combat_regen: e.target.value
		})
	}

	onRemoveRow(index) {

		let items = this.state.items;

		items = items.slice(0, index).concat(items.slice(index + 1));

		this.setState({
			items: items
		})
	}

	onSuggestionClick(item) {
		this.setState({
			label: item.label,
			i: item.i ? item.i : 0,
			s: item.s ? item.s : 0,
			m: item.m ? item.m : 0,
			suggestions: []
		})
	}

	onChangeGroup(e) {
		this.setState({
			group: e.target.value
		})
	}

	addGroup(e) {
		let items = this.library_items.filter(item => item.type == this.state.group).map((item) => {
			if (!item.s) {
				item.s = 0;
			}
			if (!item.i) {
				item.i = 0;
			}
			if (!item.m) {
				item.m = 0;
			}
			return item;
		});
		console.log(items)
		this.setState({
			items: items,
			group: null
		})
	}

	render() {

		let minutes = [60, 120, 180, 240, 300, 450, 600];

		return <div className="site-content">
			<div className="container">
				<h1>ManaWise <span className="badge badge-light">Beta</span></h1>
				<p>A tool to compare intellect, spirit and mana per five in WoW Classic</p>
				<p><small>Wanna see how long your mana will last in a fight? <Link to={"/lastwise"}>Go to LastWise Mana calculator</Link></small></p>
				<div className="row">
					<div className="col-md-6 mb-4">
						<h4>Character settings</h4>
						<div>
							<div className="form-row">
								<div className="form-group col">
									<label>Class</label>
									<select value={this.state.class} className="form-control" onChange={this.onChangeClass.bind(this)}>
										<option value="druid">Druid/Shaman/Paladin</option>
										<option value="priest">Priest/Mage</option>
									</select>
								</div>

								<div className="form-group col">
									<label>Combat regen</label>
									<select className="form-control" defaultValue={this.state.conf_combat_regen} onChange={this.onChangeCombatRegen.bind(this)}>
										<option value="0">Disabled (0%)</option>
										<option value="15">Talents (15%)</option>
										<option value="30">Talents + Tier 2 Set (30%)</option>
									</select>
								</div>

								<div className="form-group col-3">
									<label>Innervate</label>
									<select className="form-control" defaultValue={this.state.inner ? 'enabled' : 'disabled'} onChange={this.onChangeInner.bind(this)}>
										<option value="disabled">Disabled</option>
										<option value="enabled">Enabled</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<h4>Compare group</h4>
						<div className="form-row">
						<div className="form-group col-6">
							<label>Choose item group</label>
							<select className="form-control" defaultValue={this.state.group} onChange={this.onChangeGroup.bind(this)}>
								<option value="">...</option>
								<option value="ring">Rings</option>
								<option value="enchant_chest">Enchants - Chest</option>
								<option value="enchant_bracer">Enchants - Bracer</option>
								<option value="enchant_boots">Enchants - Boots</option>
							</select>

						</div>
							<div className="col-5">
								<label>&nbsp;</label>
								<button className="btn btn-primary btn-block" disabled={!this.state.group} onClick={this.addGroup.bind(this)}>Add group</button>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<h4>or Add item / enchant</h4>
						<div>
						<div className="form-row">
							<div className="form-group col-4">
								<label>Label</label>
								<input type="text" className="form-control" value={this.state.label} onChange={this.onChangeLabel.bind(this)}/>
								{false && this.state.suggestions.map((item) => {
									return <p onClick={this.onSuggestionClick.bind(this, item)}>{item.label}</p>
								})}
							</div>

							<div className="form-group col-2">
								<label>Int</label>
								<input type="number" className="form-control" min={0} value={this.state.i} onChange={this.onChangeI.bind(this)}/>
							</div>

							<div className="form-group col-2">
								<label>Spirit</label>
								<input type="number" className="form-control" min={0} value={this.state.s} onChange={this.onChangeS.bind(this)}/>
							</div>

							<div className="form-group col-2">
								<label>MP5</label>
								<input type="number" className="form-control" min={0} value={this.state.m} onChange={this.onChangeM.bind(this)}/>
							</div>

							<div className="col-2">
								<label>&nbsp;</label>
								<button className="btn btn-primary btn-block" disabled={!this.state.label} onClick={this.addItem.bind(this)}>Add</button>
							</div>

						</div>
						</div>
					</div>

				</div>
				<div className="row">
					<div className="col">

				<table className="table table-bordered">
					<tr>
						<th></th>
						<th>Initial mana</th>
						{minutes.map((mins) => {
							return <th>{mins / 60} min</th>
						})}
					</tr>
					{this.state.items.map((item, i) => {

						let init = item.i * 15;
						let spiritCoff = (this.state.class == 'druid') ? 5 : 4;
						let itemPerFive = ((item.s / spiritCoff) * 2.5);
						let spi = itemPerFive * (this.state.conf_combat_regen / 100);

						let persec = (parseFloat(item.m) + spi) / 5;
						let innervate = 0;
						if (this.state.inner) {
							innervate = (((itemPerFive / 5) * (5 - this.state.conf_combat_regen / 100))) * 20
						}

						let stats = [];
						if (item.i) {
							let int = parseFloat(item.i);
							stats.push((int !== Math.floor(int) ? '~'+int.toFixed(1) : int)+' int');
						}
						if (item.s) {
							stats.push(item.s+' spi');
						}
						if (item.m) {
							stats.push(item.m+' mp5');
						}

						return <tr>
							<td>{item.label}<br /><small>({stats.join(', ')})</small>{this.state.inner && <small><br />Innervate: {innervate.toFixed(0)} mana</small>}</td>
							<td>{init}</td>
							{minutes.map((mins, i) => {

								let inner = 0;
								if (i > 0) {
									inner = innervate;
								}
								if (i >= 5) {
									inner *= 2;
								}

								let num = init + inner + (mins * persec);
								return <td>{((num / mins) * 5).toFixed(1)} <small>({num.toFixed(0)})</small></td>
							})}
							<td><button className="btn btn-small btn-outline-danger" onClick={this.onRemoveRow.bind(this, i)}>Remove</button></td>
						</tr>
					})}
				</table>
						<p>
						<small class="font-italic text-sm">Table shows the average mana per 5 for a specific fight duration. Example: 3 mp5 (100 total mana gained)</small>
						<br />	<small class="font-italic">Innervate is added at 60 seconds and 7 minutes into the fight. The idea is that you dont spend enough mana in first minute to benefit from a full innervate.</small>
						</p>
						</div>
				</div>

				<div className="mt-5">
					Author: Teeribull @ Mirage Raceway EU
				</div>
			</div>

		</div>
	}
};

export default TemplateIndex;