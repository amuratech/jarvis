# A GraphQL Implementation on mongoDB

Project is a graphQL implemetation with a node server. Here we integrate heimdall's mongodb database to learn more applications of replacing REST with GraphQL.

Find more about the project [here](https://docs.google.com/presentation/d/1u5CdFN5dXiP6CvX1OkJ4o9jvFPh3yWWcJdK7ei1llbg/)

## Usage

### Stack

*Javascript*

### Installation

1.Make sure you have a running mongo instance(installation instructions are based on MacOS distribution)

```bash
<!-- install mongo -->
brew install mongo

<!-- start mongo instance -->
brew services mongo start
```

2.Clone the repo to your system

```bash
<!-- clone the repo -->
cd grid/

<!-- install all dependancy -->
npm install

<!-- run the server -->
npm start
```

3. Now node will be running on port `3000` as default. Go to `localhost:3000`


## GraphiQL

GraphiQL is a graphical interactive in-browser GraphQL IDE.Here are some of our workarounds.

Before starting navigate to `localhost:3000/graphiql`

Here are some of the example querys to try out.

Fetch all the datapoints
```json
query {
  allAccounts {
    account_name
    _id
  }
}
```

Filter a data point
```json
{
  findOne(id:"5c134f4217396d924a9701fe"){
    account_name
    selldo_id
    current_churn
    invoice {
      month
      amount
    }
  }
}
```
