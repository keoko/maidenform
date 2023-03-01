const query = `query productSearch(
    $currentPage: Int = 1
    $pageSize: Int = 20
    $phrase: String = ""
    $sort: [ProductSearchSortInput!] = []
    $filter: [SearchClauseInput!] = []
) {
    productSearch(
        current_page: $currentPage
        page_size: $pageSize
        phrase: $phrase
        sort: $sort
        filter: $filter
    ) {
        facets {
            title
            type
            attribute
            buckets {
                title
                __typename
                ... on RangeBucket {
                    count
                    from
                    to
                }
                ... on ScalarBucket {
                    count
                    id
                }
                ... on StatsBucket {
                    max
                    min
                }
            }
        }
        items {
            productView {
                name
                sku
                url
                images(roles: []) {
                    label
                    roles
                    url
                }
                ... on SimpleProductView {
                    price {
                        ...priceFields
                    }
                }
                ... on ComplexProductView {
                    priceRange {
                        minimum {
                            ...priceFields
                        }
                        maximum {
                            ...priceFields
                        }
                    }
                    options {
                        title
                        values {
                            title
                        }
                    }
                }
            }
        }
        page_info {
            current_page
            total_pages
            page_size
        }
        total_count
    }
}

fragment priceFields on ProductViewPrice {
    regular {
        amount {
            currency
            value
        }
    }
    final {
        amount {
            currency
            value
        }
    }
}`;

export default query.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' ');
