import os
import openai
from dotenv import load_dotenv
import json

load_dotenv()


def embed_text(text, model="text-embedding-3-small", dimensions=1536):
    """
    Get embeddings for a text string using OpenAI's API.

    Args:
        text (str): The text to get embeddings for
        model (str): The OpenAI embedding model to use
        dimensions (int, optional): Number of dimensions for the embedding vector
                                   Only supported in text-embedding-3 models

    Returns:
        list: The embedding vector as a list of floats
    """
    # Set the API key
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError(
            "OpenAI API key not found. Set it as OPENAI_API_KEY in your environment or .env file."
        )

    client = openai.OpenAI(api_key=api_key)

    # Prepare request parameters
    params = {
        "input": text,
        "model": model,
    }

    # Add dimensions parameter if specified
    if dimensions and model.startswith("text-embedding-3"):
        params["dimensions"] = dimensions

    # Get the embedding from OpenAI
    response = client.embeddings.create(**params)

    # Extract the embedding vector from the response
    embedding = response.data[0].embedding

    return embedding


def embed_targets(targets_fp):
    targets = json.load(open(targets_fp, "r"))
    for target in targets:
        embedding = embed_text(target)
        target["embedding"] = embedding

    # todo: write embedding
    json.dump(targets, open(targets_fp, "w"))


if __name__ == "__main__":
    embed_targets("data/targets.json")
