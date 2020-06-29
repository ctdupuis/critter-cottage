class AnimalSerializer
    def initialize(object)
        @animal = object
    end

    def to_serialized_json
        options = {
            include: {
                image: {
                    url: rails_blob_path(@animal)
                }
            },
            except: [:created_at, :updated_at]
        }
        @animal.to_json(options)
    end
end