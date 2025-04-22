I. Document Description
1. dataset
This is the dataset divided in the Entity Debiasing Evaluation experiment. The dataset is presented in txt format and divided in a ratio of 3:1:1 for the training set, validation set, and test set. The file content format is: label, the beginning and end positions of the two entities, and the original sentence.

2. Adjacency Matrix _ Numerical edition.xlsx
This file is the adjacency matrix of the directed graph of the relationships among all entities in the CauDEBT dataset. The values in the matrix indicate how many sentences in the dataset support the corresponding causal relationship.

3. Adjacency Matrix _ Causal Edition.xlsx
This is the adjacency matrix of the directed graph of the relationships among all entities in the CauDEBT dataset. It is processed on the basis of the numerical version, retaining only a one-way relationship supported by more sentences between the two entities and marked as 1.
