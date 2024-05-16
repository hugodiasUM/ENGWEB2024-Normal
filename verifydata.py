from pymongo import MongoClient

# Conectar ao MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['contratos']  # Nome da base de dados
collection = db['contratos']  # Nome da coleção

# Buscar os 5 primeiros documentos na coleção
first_five_documents = collection.find().limit(5)

# Imprimir os 5 primeiros documentos
for doc in first_five_documents:
    print(doc)
