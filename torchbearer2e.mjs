import { Torchbearer2eActor } from "./documents/actor.mjs";
import { Torchbearer2eItem } from "./documents/item.mjs";
import { Torchbearer2eActorSheet } from "./sheets/actor-sheet.mjs";
import { Torchbearer2eItemSheet } from "./sheets/item-sheet.mjs";
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { TORCHBEARER2E } from "./helpers/config.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function() {

	game.boilerplate = {
		BoilerplateActor,
		BoilerplateItem
	};

	CONFIG.TORCHBEARER2E = TORCHBEARER2E

	CONFIG.Actor.documentClass = Torchbearer2eActor;
	CONFIG.Item.documentClass = Torchbearer2eItem;

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("torchbearer2e", Torchbearer2eActorSheet, { makeDefault: true });
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("torchbearer2e", Torchbearer2eItemSheet, { makeDefault: true });

	return reploadHandlbarsTemplates();
});
