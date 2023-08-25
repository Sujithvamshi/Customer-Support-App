from flask import Flask, request
import pickle

app = Flask(__name__)

@app.route("/ticket-classification", methods=['POST'])
def predict_complaint():
    data = request.json
    
    # Load the tokenizer and transform the input complaint
    with open('ml-server/pickles/tokenizer.pkl', 'rb') as tokenizer_file:
        tokenizer = pickle.load(tokenizer_file)
    
    scaled = tokenizer.transform([data['complaint']])
    
    # Load the classifier and make a prediction
    with open('ml-server/pickles/classifier.pkl', 'rb') as classifier_file:
        classifier = pickle.load(classifier_file)
    
    prediction = classifier.predict(scaled)
    # Return the prediction result
    return {"prediction": prediction.tolist()}

if __name__ == '__main__':
    app.run()
