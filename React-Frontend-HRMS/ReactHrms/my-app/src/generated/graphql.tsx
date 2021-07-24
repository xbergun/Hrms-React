import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Cv = {
  __typename?: 'Cv';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  empAddress?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  workExperience?: Maybe<Scalars['String']>;
  coverLetter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
};

export type Employeer = {
  __typename?: 'Employeer';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  positionId: Scalars['Int'];
};

export type Employer = {
  __typename?: 'Employer';
  id: Scalars['Int'];
  companyName?: Maybe<Scalars['String']>;
  companyAdress?: Maybe<Scalars['String']>;
  companyWebAdress?: Maybe<Scalars['String']>;
  companyNumber?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
};

export type JobAdvertisement = {
  __typename?: 'JobAdvertisement';
  id: Scalars['Int'];
  employer?: Maybe<Scalars['String']>;
  jobPosition?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  jobDescription?: Maybe<Scalars['String']>;
  minSalary: Scalars['Int'];
  maxSalary: Scalars['Int'];
  workType?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type JobSeeker = {
  __typename?: 'JobSeeker';
  id: Scalars['Int'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  employers?: Maybe<Array<Maybe<Employer>>>;
  cvs?: Maybe<Array<Maybe<Cv>>>;
  employeers?: Maybe<Array<Maybe<Employeer>>>;
  jobAdvertisements?: Maybe<Array<Maybe<JobAdvertisement>>>;
  jobSeekers?: Maybe<Array<Maybe<JobSeeker>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  companyname?: Maybe<Scalars['String']>;
  companycatchPhrase?: Maybe<Scalars['String']>;
  companybs?: Maybe<Scalars['String']>;
};

export type GetCvQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCvQuery = (
  { __typename?: 'Query' }
  & { cvs?: Maybe<Array<Maybe<(
    { __typename?: 'Cv' }
    & Pick<Cv, 'id' | 'lastName'>
  )>>> }
);


export const GetCvDocument = gql`
    query GetCv {
  cvs {
    id
    lastName
  }
}
    `;

/**
 * __useGetCvQuery__
 *
 * To run a query within a React component, call `useGetCvQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCvQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCvQuery(baseOptions?: Apollo.QueryHookOptions<GetCvQuery, GetCvQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCvQuery, GetCvQueryVariables>(GetCvDocument, options);
      }
export function useGetCvLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCvQuery, GetCvQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCvQuery, GetCvQueryVariables>(GetCvDocument, options);
        }
export type GetCvQueryHookResult = ReturnType<typeof useGetCvQuery>;
export type GetCvLazyQueryHookResult = ReturnType<typeof useGetCvLazyQuery>;
export type GetCvQueryResult = Apollo.QueryResult<GetCvQuery, GetCvQueryVariables>;