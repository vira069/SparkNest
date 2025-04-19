import mongoose from 'mongoose';

const performanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId,
     ref: 'User', 
     required: true 
    },
  category: { 
    type: String,
    required: true
    },
  score: { 
    type: Number, 
    required: true 
    },
  date: {
     type: Date, 
     default: Date.now
     }
});

const Performance = mongoose.model('Performance', performanceSchema);

export default Performance;
