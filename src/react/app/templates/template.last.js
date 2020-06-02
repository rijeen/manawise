import React from 'react';

import { Link } from 'react-router-dom';

class TemplateLast extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			spells: [],
			mana: 5000,
			s: 100,
			m: 0,
			crit: 5,
			activity: 100,

			//item
			label: '',
			cost: 0,
			time: 0,

			//item
			group: null,
			conf_combat_regen: 0,
			class: 'druid',
			cons_inner: false,
			cons_tide: false,
			cons_pots: 0,
			cons_runes: 0,
			cons_flask: false,
			suggestions: [],

			//talents
			talent_druid_mg: 0,
			talent_druid_ts: 0,
			talent_druid_ng: false,
			talent_druid_imprg: 0
		}
		this.spell_groups = [
			{
				type: 'druid',
				label: 'Healing Touch (rank 3)',
				desc: 'HT3 spam',
				cost: 110,
				costCallback: () => {
					return this.calculateSpellManaCost('ht', 110)
				},
				time: 2,
				timeCallback: () => {
					return this.calculateSpellCastTime('ht', 2);
				}

			},
			{
				type: 'druid',
				label: 'Healing Touch (rank 4)',
				desc: 'HT4 spam',
				cost: 185,
				costCallback: () => {
					return this.calculateSpellManaCost('ht', 185)
				},
				time: 2.5,
				timeCallback: () => {
					return this.calculateSpellCastTime('ht', 2.5);
				}

			},
			{
				type: 'druid',
				label: 'Regrowth (rank 3)',
				desc: 'Regrowth Raid healing',
				cost: 280,
				costCallback: () => {
					return this.calculateSpellManaCost('rg', 280)
				},
				time: 2,
				timeCallback: () => {
					return this.calculateSpellCastTime('rg', 2);
				}

			},
			{
				type: 'druid',
				label: 'Regrowth R3 + HT3',
				desc: 'Regrowth R3 + HT3 mix (50/50)',
				cost: 280+110,
				costCallback: () => {
					return this.calculateSpellManaCost('rg', 280)+this.calculateSpellManaCost('ht', 110)
				},
				time: 4,
				timeCallback: () => {
					return this.calculateSpellCastTime('rg', 2) + this.calculateSpellCastTime('ht', 2);
				}
			},
			{
				type: 'druid',
				label: 'Tank mix (HT3 + Rejuv)',
				desc: '1x rejuv + 6x HT3',
				cost: 335 + (6 * 110),
				costCallback: () => {
					return this.calculateSpellManaCost('rj', 335)+(6 * this.calculateSpellManaCost('ht', 110))
				},
				time: 13.5,
				timeCallback: () => {
					return 1.5 + (6 * this.calculateSpellCastTime('ht', 2))
				}
			},
			{
				type: 'druid',
				label: 'Tank mix (HT4 + Rejuv)',
				desc: '1x rejuv + 5x HT4',
				cost: 335 + (5 * 170),
				costCallback: () => {
					return this.calculateSpellManaCost('rj', 335)+(5 * this.calculateSpellManaCost('ht', 170))
				},
				time: 14,
				timeCallback: () => {
					return 1.5 + (5 * this.calculateSpellCastTime('ht', 2.5))
				}
			},
			{
				type: 'druid',
				label: 'Tank HoT (HT4 + Rejuv + RG5)',
				desc: '2x rejuv + 8x HT4 + 1x Regrowth (rank 5)',
				cost: 335 + (5 * 170),
				costCallback: () => {
					return (2*this.calculateSpellManaCost('rj', 335))+(8 * this.calculateSpellManaCost('ht', 170))+this.calculateSpellManaCost('rg', 420)
				},
				time: 25,
				timeCallback: () => {
					return 3 + (8 * this.calculateSpellCastTime('ht', 2.5)) + this.calculateSpellCastTime('rg', 2)
				}
			}
		];
	}

	addItem() {
		let item = {
			label: this.state.label,
			desc: null,
			cost: this.state.cost,
			time: this.state.time,
			conf_combat_regen: 0
		}

		let spells = this.state.spells;
		spells = spells.concat([item]);

		if (this.state.label.length > 0) {
			this.setState({
				spells: spells,
				label: '',
				cost: 0,
				time: 0
			})
		}
	}

	onChangeLabel(e) {
		let suggestions = [];

		if (e.target.value.length > 1) {
			//suggestions = this.library_items.filter(item => item.label.toLowerCase().indexOf(this.state.label.toLowerCase()) >= 0);
		}

		this.setState({
			label: e.target.value,
			//suggestions: suggestions
		})
	}

	onChangeTime(e) {
		this.setState({
			time: parseFloat(e.target.value)
		})
	}

	onChangeCost(e) {
		this.setState({
			cost: parseInt(e.target.value)
		})
	}

	onChangeMana(e) {
		this.setState({
			mana: parseInt(e.target.value)
		})
	}

	onChangeCrit(e) {
		this.setState({
			crit: parseInt(e.target.value)
		})
	}

	onChangeActivity(e) {
		this.setState({
			activity: parseInt(e.target.value)
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
			class: e.target.value,
			conf_combat_regen: 0
		})
	}

	onChangeConsumable(type, e) {

		let obj = {};

		switch (type) {
			case 'inner':
				obj.cons_inner = e.target.value == 'enabled';
				break;
			case 'tide':
				obj.cons_tide = e.target.value == 'enabled';
				break;
			case 'pot':
				obj.cons_pots = e.target.value;
				break;
			case 'rune':
				obj.cons_runes = e.target.value;
				break;
			case 'flask':
				obj.cons_flask = e.target.value == 'enabled';
				break;
			case 'druid_ts':
				obj.talent_druid_ts = e.target.value;
				break;
			case 'druid_mg':
				obj.talent_druid_mg = e.target.value;
				break;
			case 'druid_ng':
				obj.talent_druid_ng = e.target.value == 'enabled';
				break;
			case 'druid_imprg':
				obj.talent_druid_imprg = e.target.value;
				break;
		}

		this.setState(obj)
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
		let spells = this.spell_groups.filter(spell => spell.type == this.state.group).map((spell) => {
			return spell;
		});

		this.setState({
			spells: spells,
			group: null
		})
	}

	calculateSpellManaCost(spell, cost)
	{
		let newCost = cost;

		switch (spell) {
			case 'ht':
				newCost = newCost * (1 - (0.02 * this.state.talent_druid_ts));
				newCost = newCost * (1 - (0.03 * this.state.talent_druid_mg));
				break;
			case 'rg':
			case 'rj':
				newCost = newCost * (1 - (0.03 * this.state.talent_druid_mg));
				break;
		}


		return newCost;
	}

	calculateSpellCastTime(spell, time)
	{
		let newTime = time;

		if (this.state.talent_druid_ng) {
			switch (spell) {
				case 'rg':
					let crit = this.state.crit + (this.state.talent_druid_imprg * 10);
					newTime = time - (crit/100 * 0.5)
					break;
				case 'ht':
					newTime = time - (this.state.crit/100 * 0.5)
					break;
			}
		}

		return newTime;
	}
	/*
			<option value="priest">Priest</option>
											<option value="shaman">Shaman</option>
											<option value="paladin">Paladin</option>
	 */

	render() {

		return <div className="site-content">
			<div className="container">
				<h1>LastWise <span className="badge badge-light">Beta</span></h1>
				<p>A tool to see how long your mana will last in WoW Classic</p>
				<p><small>Wanna compare mp5/spirit on items? <Link to={"/"}>Go to Manawise Item Comparison</Link></small></p>
				<hr className="mb-4 mt-4" />
				<div className="row">
					<div className="col-md-12 mb-4">

						<div className="row">
							<div className="col-md-4">
								<h4>Character settings</h4>
								<div className="form-row">
									<div className="form-group col-6">
										<label>Class</label>
										<select value={this.state.class} className="form-control" onChange={this.onChangeClass.bind(this)}>
											<option value="druid">Druid</option>


										</select>
									</div>
									{['priest', 'druid'].indexOf(this.state.class) >= 0 &&
									<div className="form-group col-6">
										<label>Combat regen</label>
										<select className="form-control" defaultValue={this.state.conf_combat_regen} onChange={this.onChangeCombatRegen.bind(this)}>
											<option value={0}>Disabled (0%)</option>
											<option value={15}>Talents (15%)</option>
											<option value={30}>Talents + Tier 2 Set (30%)</option>
										</select>
									</div>}
								</div>
								<div className="form-row">
									<div className="form-group col-4">
										<label>Mana</label>
										<input type="number" className="form-control" min={0} value={this.state.mana} onChange={this.onChangeMana.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Spirit</label>
										<input type="number" className="form-control" min={0} value={this.state.s} onChange={this.onChangeS.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>MP5</label>
										<input type="number" className="form-control" min={0} value={this.state.m} onChange={this.onChangeM.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Crit %</label>
										<input type="number" className="form-control" min={0} value={this.state.crit} onChange={this.onChangeCrit.bind(this)}/>
									</div>
									<div className="form-group col-4">
										<label>Activity %</label>
										<input type="number" className="form-control" min={0} max={100} value={this.state.activity} onChange={this.onChangeActivity.bind(this)}/>
									</div>
								</div>

							</div>
							<div className="col-md-4">
								<h4>Talent settings</h4>
								<div className="form-row">
									<div className="form-group col-6">
										<label>Moonglow</label>
										<select className="form-control" defaultValue={this.state.talent_druid_mg} onChange={this.onChangeConsumable.bind(this, 'druid_mg')}>
											<option value="0">None</option>
											<option value="1">1p (3%)</option>
											<option value="2">2p (6%)</option>
											<option value="3">3p (9%)</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Tranquil Spirit</label>
										<select className="form-control" defaultValue={this.state.talent_druid_ts} onChange={this.onChangeConsumable.bind(this, 'druid_ts')}>
											<option value="0">None</option>
											<option value="1">1p (2%)</option>
											<option value="2">2p (4%)</option>
											<option value="3">3p (6%)</option>
											<option value="4">4p (8%)</option>
											<option value="5">5p (10%)</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Nature's grace</label>
										<select className="form-control" defaultValue={this.state.talent_druid_ng ? 'enabled' : 'disabled'} onChange={this.onChangeConsumable.bind(this, 'druid_ng')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Imp. Regrowth</label>
										<select className="form-control" defaultValue={this.state.talent_druid_imprg} onChange={this.onChangeConsumable.bind(this, 'druid_imprg')}>
											<option value="0">None</option>
											<option value="1">1p (10%)</option>
											<option value="2">2p (20%)</option>
											<option value="3">3p (30%)</option>
											<option value="4">4p (40%)</option>
											<option value="5">5p (50%)</option>
										</select>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<h4>Consumables settings</h4>

								<div className="form-row">
									<div className="form-group col-6">
										<label>Innervate</label>
										<select className="form-control" defaultValue={this.state.cons_inner ? 'enabled' : 'disabled'} onChange={this.onChangeConsumable.bind(this, 'inner')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Mana tide totem</label>
										<select className="form-control" defaultValue={this.state.cons_tide ? 'enabled' : 'disabled'} onChange={this.onChangeConsumable.bind(this, 'tide')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-12">
										<label>Flask of distilled wisdom</label>
										<select className="form-control" defaultValue={this.state.cons_flask ? 'enabled' : 'disabled'} onChange={this.onChangeConsumable.bind(this, 'flask')}>
											<option value="disabled">Disabled</option>
											<option value="enabled">Enabled</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Major mana potion</label>
										<select className="form-control" defaultValue={this.state.cons_pots} onChange={this.onChangeConsumable.bind(this, 'pot')}>
											<option value={0}>None</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>
									<div className="form-group col-6">
										<label>Runes</label>
										<select className="form-control" defaultValue={this.state.cons_runes} onChange={this.onChangeConsumable.bind(this,'rune')}>
											<option value={0}>None</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</select>
									</div>
								</div>

							</div>
						</div>

						<div>
							<div className="form-row">

							</div>
						</div>
					</div>
				</div>
				<hr className="mb-5" />
				<div className="row">
					<div className="col-md-4">
						<h4>Add a compare group</h4>

						<div className="form-row">
							<div className="form-group col-6">
								<label>Spells</label>
								<select className="form-control" defaultValue={this.state.group} onChange={this.onChangeGroup.bind(this)}>
									<option value="">...</option>
									<option value="druid">Druid (most common)</option>
									{false && <option value="priest">Priest</option>}
								</select>

							</div>
							<div className="col-5">
								<label>&nbsp;</label>
								<button className="btn btn-primary btn-block" disabled={!this.state.group} onClick={this.addGroup.bind(this)}>Add group</button>
							</div>
						</div>
					</div>
					<div className="col-md-6 offset-2">
						<h4>or Add custom spell</h4>
						<div>
							<div className="form-row">
								<div className="form-group col-6">
									<label>Label</label>
									<input type="text" className="form-control" value={this.state.label} onChange={this.onChangeLabel.bind(this)}/>
									{false && this.state.suggestions.map((item) => {
										return <p onClick={this.onSuggestionClick.bind(this, item)}>{item.label}</p>
									})}
								</div>
								<div className="form-group col-2">
									<label>Mana cost</label>
									<input type="number" className="form-control" min={0} value={this.state.cost} onChange={this.onChangeCost.bind(this)}/>
								</div>
								<div className="form-group col-2">
									<label>Duration</label>
									<input type="number" className="form-control" min={0} value={this.state.time} onChange={this.onChangeTime.bind(this)}/>
								</div>
								<div className="col-2">
									<label>&nbsp;</label>
									<button className="btn btn-primary btn-block" disabled={!this.state.label} onClick={this.addItem.bind(this)}>Add</button>
								</div>

							</div>
							<p><small>(Talents are not used, so add the real mana cost and cast time)</small></p>
						</div>
					</div>

				</div>
				<div className="row">
					<div className="col">

						<table className="table table-bordered">
							<tr>
								<th></th>
								<th>Mana cost</th>
								<th>Duration</th>
								<th>Mana spent per second</th>
								<th>Will last (self)</th>
								<th>Will last (self + consumables)</th>
							</tr>
							{this.state.spells.map((spell, i) => {

								let cost = spell.cost;
								let duration = spell.time;

								if (spell.costCallback) {
									cost = Math.round(spell.costCallback());
								}

								if (spell.timeCallback) {
									duration = Math.round(spell.timeCallback() * 1000) / 1000;
								}

								let spent = (cost / duration) * (this.state.activity / 100);
								let base = this.state.mana
								let consumes = 0;

								let spiritCoff = (this.state.class == 'druid') ? 5 : 4;
								let spiritBase = (this.state.class == 'druid') ? 15 : 13;
								let spiritPerSec = (spiritBase + (this.state.s / spiritCoff)) / 2;

								let minimumLength = 0;

								let gain = (spiritPerSec * (this.state.conf_combat_regen / 100)) + (this.state.m / 5);

								if (this.state.cons_inner) {
									consumes += (spiritPerSec * 20) * (5 - this.state.conf_combat_regen / 100);
								}

								if (this.state.cons_tide) {
									consumes += (290 * 4);
								}

								if (this.state.cons_flask) {
									consumes += 2000;
								}

								let oom = false;
								let lastFull = Math.floor((base + consumes) / (spent - gain));
								if (this.state.cons_pots > 0 || this.state.cons_runes > 0) {

									let pot = 1800;
									let rune = 1200;

									if (this.state.cons_pots > 0) {
										consumes += pot;
										minimumLength = 30 + (120 * (this.state.cons_pots - 1));
									}

									if (this.state.cons_runes > 0) {
										consumes += rune;
										let runeLength = 30 + (120 * (this.state.cons_runes - 1));
										if (runeLength > minimumLength) {
											minimumLength = runeLength;
										}
									}

									lastFull = Math.floor((base + consumes) / (spent - gain));

									let maxConsume = this.state.cons_pots > this.state.cons_runes ? this.state.cons_pots : this.state.cons_runes;
									if (maxConsume > 1) {
										let tempConsume = 0;
										let tempLength = 30 + 120;
										for (let i = 1; i <= maxConsume; i++) {

											lastFull = Math.floor((base + consumes + tempConsume) / (spent - gain));

											oom = minimumLength > lastFull;
											
											if (tempLength > lastFull) {
												break;
											}

											if (i < this.state.cons_pots) {
												tempConsume += pot;
											}

											if (i < this.state.cons_runes) {
												tempConsume += rune;
											}

											tempLength += 120;

										}
									}

								}

								let diff = 0;
								if (spell.timeCallback) {
									diff = Math.round((duration - spell.time) * 1000)/1000;
								}

								return <tr>
									<td>{spell.label}<br />{spell.desc && <small>({spell.desc})</small>}</td>
									<td>{cost}</td>
									<td>{duration} sec {diff !== 0 && <small><br />({diff} sec)</small>}</td>
									<td>{spent.toFixed(1)}</td>
									<td>{Math.floor(base / (spent - gain))} sec</td>
									<td>{lastFull} sec {oom && <span className={"badge badge-danger"}>OOM!</span>}</td>
								</tr>
							})}
						</table>
						<p>
							<small class="font-italic text-sm">* <span className={"badge badge-danger"}>OOM!</span> means that you will run out of mana before you can use the set amount of pots/runes you put in. Example: You run out of mana at 2min, but the next mana pot you can use is at 2min 30s.</small>
						</p>
						<p>
							<small class="font-italic">** Pots and runes are added 30 seconds into the fight, then 2min 30s, then 4min 30s and so on. The idea is that you dont spend enough mana in first 30 sec to benefit the full effect. Innervate and mana tide totem is added once per fight. </small>
						</p>
						<p>
							<small className="font-italic">*** Whats with the odd durations on predefined spells? When there are HoT's involved the duration is extended to not override the current HoT with a new cast. Example: 12 sec rejuvenation + four HT4 will result in a total cast time of 11.5 seconds. Its better to cast another HT4 before reapplying. Making it total duration of 14s.</small>
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

export default TemplateLast;