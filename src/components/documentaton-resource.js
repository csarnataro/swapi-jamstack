import React from 'react';
import PropTypes from 'prop-types';
import Code from './code';

function DocumentationResource({
  title,
  description,
  anchor,
  endpoints,
  request,
  response,
  attributes,
  searchFields,
}) {
  return (
    <>
      <a name={anchor} id={anchor}></a>
      <h4>{title}</h4>
      <p>{description}</p>
      {endpoints ? (
        <p>
          Endpoints
          <ul>
            {endpoints.map((endpoint) => (
              <li key={`endpoint-${endpoint.url}`}>
                <Code inline>{endpoint.url}</Code> -- {endpoint.description}
              </li>
            ))}
          </ul>
        </p>
      ) : (
        ''
      )}
      <p>
        Example request:
        {/* TODO: i would prefer to replace httpie with CURL, everywhere */}
        <Code>http {request}</Code>
      </p>
      <p>
        Example response:
        <Code>{response}</Code>
      </p>
      {attributes ? (
        <p>
          Attributes:
          <ul>
            {attributes.map((attribute) => (
              <li key={`attribute-${attribute.name}`}>
                <Code inline>{attribute.name}</Code> <i>{attribute.type}</i> --{' '}
                {attribute.description}
              </li>
            ))}
          </ul>
        </p>
      ) : (
        ''
      )}

      {searchFields ? (
        <p>
          Search Fields:
          <ul>
            {searchFields.map((searchField) => (
              <li key={`search-field-${searchField.name}`}>
                <Code inline>{searchField.name}</Code>
              </li>
            ))}
          </ul>
        </p>
      ) : (
        ''
      )}
      <hr />
    </>
  );
}

DocumentationResource.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  anchor: PropTypes.string,
  endpoints: PropTypes.array,
  request: PropTypes.string,
  response: PropTypes.string,
  attributes: PropTypes.array,
  searchFields: PropTypes.array,
};

export default DocumentationResource;
