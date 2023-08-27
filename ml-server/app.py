from flask import Flask, request
import pickle

app = Flask(__name__)
with open('pickles/tokenizer.pkl', 'rb') as tokenizer_file:
        tokenizer = pickle.load(tokenizer_file)

with open('pickles/classifier.pkl', 'rb') as classifier_file:
        classifier = pickle.load(classifier_file)

@app.route("/ticket-classification", methods=['POST'])
def predict_complaint():
    data = request.json
    scaled = tokenizer.transform([data['complaint']])
    prediction = classifier.predict(scaled)
    return {"prediction": prediction.tolist()}

if __name__ == '__main__':
    app.run()
