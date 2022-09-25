import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';

import MModel from './MModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: String,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class Motorcycle extends MModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}

export default Motorcycle;