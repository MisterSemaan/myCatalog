import express from 'express';

import * as validation from '../middlewares';
import * as controller from '../controllers';

const router = express.Router();

// @route    POST catalog/add
// @desc     Create a new singleCatalog
// @access   Private
router.post(
  '/add',
  // validation.isValidAssetType,
  // validation.genericValidator,
  controller.addNewCatalog,
);

// @route    POST catalog/delete
// @desc     Delete a singleCatalog
// @access   Private
router.post(
  '/delete',
  // verify whether user has gone through the full ui of deleting a singleCatalog
  // clicking on the delete button && confirming the popup modal
  controller.deleteCatalog,
);

// @route    POST catalog/update
// @desc     Update a new singleCatalog
// @access   Private
router.post(
  '/update',
  // validate the entry
  // what is the user updating?
  // - assetType of singleCatalog? description of singleCatalog? asset entry within singleCatalog?
  controller.updateCatalog,
);

// @route    GET catalog/
// @desc     Get all catalogs
// @access   Private
router.get(
  '/',
  // validate user
  controller.getAllCatalogs,
);

// @route    POST catalog/
// @desc     Import catalog
// @access   Private
router.post(
  '/import',
  // validate input
  controller.importCatalogs,
);

// @route    POST catalog/
// @desc     Import catalog
// @access   Private
router.post(
  '/export',
  // validate input
  controller.exportCatalogs,
);

export default router;
