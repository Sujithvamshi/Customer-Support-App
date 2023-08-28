from flask import Flask, request
import pickle
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors = CORS(app)

with open('pickles/tokenizer.pkl', 'rb') as tokenizer_file:
        tokenizer = pickle.load(tokenizer_file)

with open('pickles/classifier.pkl', 'rb') as classifier_file:
        classifier = pickle.load(classifier_file)

@app.route("/ticket-classification", methods=['POST'])
@cross_origin(origins="http://localhost:3000")
def predict_complaint():
    data = request.json
    scaled = tokenizer.transform([data['complaint']])
    prediction = classifier.predict(scaled)
    return prediction.tolist()[0]

if __name__ == '__main__':
    app.run()
