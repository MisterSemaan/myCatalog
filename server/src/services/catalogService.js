/* eslint-disable no-console */
import Catalog from '../models/catalogModel';

export const addNewCatalogService = async (req) => {
  const {
    assetType,
    description,
    userId,
  } = req.body;

  try {
    const newCatalog = new Catalog({
      assetType,
      description,
      creator: userId,
      assets: [],
    });

    const catalog = await newCatalog.save();

    return {
      success: true, statusCode: 200, message: 'Catalog created successfully', catalog,
    };
  } catch (err) {
    return err;
  }
};

export const addAssetService = async (req) => {
  const {
    catalogId,
    newAssetData,
  } = req.body;

  try {
    const newAsset = await Catalog.findByIdAndUpdate(
      { _id: catalogId },
      { $addToSet: { assets: newAssetData } },
    ).exec();

    const asset = await newAsset.save();

    return {
      success: true, statusCode: 200, message: 'Asset added successfully', asset,
    };
  } catch (err) {
    return err;
  }
};

export const getAllCatalogsService = async (req, res) => {
  const { userid } = req.headers;

  try {
    const catalogs = await Catalog.find({ creator: userid }).exec();

    if (!catalogs) {
      return res.status(404).json({ msg: 'No catalogs for user' });
    }

    return {
      success: true, statusCode: 200, message: 'Catalogs found successfully', catalogs,
    };
  } catch (err) {
    return err;
  }
};

export const editAssetService = async (req) => {
  const {
    assetId,
    catalogId,
    editAssetData,
  } = req.body;

  console.log('ids', assetId, catalogId);
  try {
    const updatedAsset = Catalog.findOne({ _id: assetId }).then(doc => {
      const asset = doc.assets.id(catalogId);
      asset.assetName = editAssetData.assetName === '' ? asset.assetName : editAssetData.assetName;
      asset.assetQuantity = editAssetData.assetQuantity === '' ? asset.assetName : editAssetData.assetQuantity;
      asset.singleQuantityPrice = editAssetData.singleQuantityPrice === '' ? asset.assetName : editAssetData.singleQuantityPrice;
      asset.totalQuantityPrice = editAssetData.totalQuantityPrice === '' ? asset.assetName : editAssetData.totalQuantityPrice;
      doc.save();

      console.log('ass', asset);
    }).catch((err) => {
      console.log('err', err);
    });
    return {
      success: true, statusCode: 200, message: 'Asset updated successfully', asset: updatedAsset,
    };
  } catch (err) {
    return err;
  }
};

export const deleteCatalogService = async (req) => {
  const { id } = req.body;

  try {
    await Catalog.findOneAndDelete({ _id: id }, (err, res) => {
      err ? console.log('err', err) : console.log('success', res);
    });

    return { success: true, statusCode: 200, message: 'Document removed successfully' };
  } catch (err) {
    return err;
  }
};

export const deleteAssetService = async (req) => {
  const { id } = req.body;

  try {
    await Catalog.findOneAndUpdate(id, { $pull: { assets: { _id: id } } }, (err, res) => {
      err ? console.log('err', err) : console.log('success', res);
    });

    return { success: true, statusCode: 200, message: 'Document removed successfully' };
  } catch (err) {
    return err;
  }
};

// TODO: write logic for exporting and importing
export const importCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    return err;
  }
};

export const exportCatalogsService = async (req, res) => {
  try {
  } catch (err) {
    return err;
  }
};
