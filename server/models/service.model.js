import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  genreCategory: {
    type: String,
    enum: [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Science Fiction",
      "Thriller",
      "Crime",
      "Animation",
      "Documentary",
      "Biography",
      "Musical",
      "Family",
      "War",
      "Western",
      "Historical",
      "Sport"
    ]
  },
  emailSetDay: {
    type: String,
    required: true
  },
  serviceStatus: {
    type: Boolean,
    default: true
  },
  serviceStartDate: {
    type: Date,
    default: Date.now
  },
  serviceDeleteDate: {
    type: Date,
    default: null
  },
  serviceAddedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;