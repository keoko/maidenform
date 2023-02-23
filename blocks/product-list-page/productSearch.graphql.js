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
                images(roles: ["small_image", "thumbnail"]) {
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

export default query.replaceAll(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ');
